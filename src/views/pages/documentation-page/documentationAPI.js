import { $ } from 'backbone';
import _ from 'underscore';
import Lunr from 'lunr/lunr';
import BaronScroll from 'utils/baronScroll';
import CodeBlockWithHighlight from 'components/codeBlockWithHighlight';
import PreviewModal from 'components/modals/previewModal';
import Router from 'router';

import MenuTemplate from './documentation-page_menu/documentation-page_menu.jade';
import MenuSectionTemplate from './documentation-page_menu/documentation-page_menu-section.jade';
import MenuQuestionsListTemplate from './documentation-page_menu/documentation-page_menu-questions-list.jade';
import MenuItemTemplate from './documentation-page_menu/documentation-page_menu-item.jade';

import ContentTemplate from './documentation-page_content/documentation-page_content.jade';
import ContentAnchorTemplate from './documentation-page_content/documentation-page_content-anchor.jade';
import ContentQuestionTemplate from './documentation-page_content/documentation-page_content-question.jade';

export default {
  init(anchor, documentation) {
    this.content = documentation;
    $('[data-js-doc-menu]').html(MenuTemplate());
    $('[data-js-doc-content]').html(ContentTemplate());
    this.contentScroll = BaronScroll($('[data-js-doc-scroll]'));
    BaronScroll($('[data-js-doc-menu] .sidenav'));
    this.lunrData = this.convertData(this.content);
    this.startDoc(anchor);

    this.contentScroll.on('scroll', this.onScrollContent.bind(this));
    $(window).on('resize.documentation', this.onResizeWindow.bind(this));
    this.onResizeWindow();
    this.onScrollContent();
  },
  onScrollContent() {
    const scrollBottom = this.contentScroll[0].scrollHeight -
      (this.contentScroll.scrollTop() + this.blockContentHeight);
    if (scrollBottom < this.footerBlockHeight) {
      $('.edit-on-github', this.contentScroll).css({ marginBottom: `${this.footerBlockHeight - scrollBottom}px` });
    } else {
      $('.edit-on-github', this.contentScroll).css({ marginBottom: 0 });
    }
  },
  onResizeWindow() {
    this.blockContentHeight = this.contentScroll.height();
    this.footerBlockHeight = $('.footer-container', this.contentScroll).height();
  },
  convertData(content) {
    const lunrData = {
      total: 0,
      page: 1,
      pagesize: 100,
      questions: [],
    };
    const data = $.parseHTML(content);

    let prevH1ID = 0;
    let prevH2ID = 0;

    _.each(data, (elem) => {
      const valid = $(elem).prop('outerHTML');

      if (!valid) {
        return;
      }

      const isNew = this.isTag(elem, 'H1') ? true : this.isTag(elem, 'H2');

      if (!isNew) {
        this.addTagToSection(elem, lunrData);
        return;
      }
      const prevData = this.parseNewSection(elem, lunrData, prevH1ID, prevH2ID);
      prevH1ID = prevData.prevH1ID;
      prevH2ID = prevData.prevH2ID;
    });
    this.buildSectionMenu(lunrData.questions[prevH1ID], lunrData.questions);
    lunrData.total = lunrData.questions.length;

    return lunrData;
  },
  isTag(el, tag) {
    return $(el).prop('tagName') === tag;
  },
  parseNewSection(elem, lunarData, pH1ID, pH2ID) {
    const LunrData = lunarData;
    let prevH1ID = pH1ID;
    let prevH2ID = pH2ID;
    const currentId = LunrData.questions.length;
    const defaultObject = {
      id: 0,
      title: '',
      titleForIndex: '',
      tags: [],
      body: '',
    };

    defaultObject.title = $(elem).text();
    defaultObject.titleForIndex = this.buildIndex(defaultObject.title);
    defaultObject.id = currentId;

    if (this.isTag(elem, 'H1')) {
      this.buildSectionMenu(LunrData.questions[prevH1ID], LunrData.questions);
      prevH1ID = defaultObject.id;
    }

    if (this.isTag(elem, 'H2')) {
      defaultObject.parentEl = prevH1ID;
      defaultObject.parentTitle = LunrData.questions[prevH1ID].title;
      !_.has(LunrData.questions[prevH1ID], 'elMap') ? LunrData.questions[prevH1ID].elMap = [] : '';
      LunrData.questions[prevH1ID].elMap.push({
        id: LunrData.questions.length,
        elId: defaultObject.titleForIndex,
        title: defaultObject.title,
      });

      prevH2ID = defaultObject.id;
    }

    LunrData.questions.push(defaultObject);

    return {
      prevH1ID,
      prevH2ID,
    };
  },
  buildIndex(text) {
    let data = text.split(' ');
    if (data.length > 3) {
      data = text.split(' ', 3);
    }
    return data.length > 1 ? data.join('-') : data[0];
  },
  buildSectionMenu(data, questions) {
    const sectionData = data;
    if (!sectionData || !_.has(sectionData, 'elMap')) {
      return;
    }
    const menu = [];
    _.each(sectionData.elMap, (el) => {
      let level = 0;

      menu.push({
        level,
        link: el.elId,
        title: el.title,
      });

      if (_.has(questions[el.id], 'childs')) {
        level = 1;
        _.each(questions[el.id].childs, (elem) => {
          const sublink = `${el.elId}>${elem.elId}`;
          const title = elem.title;
          menu.push({
            level: elem.level,
            link: encodeURIComponent(sublink),
            title,
          });
        });
      }
    });
    sectionData.body = MenuSectionTemplate({ menu }) + sectionData.body;
  },
  addTagToSection(elem, lunarData) {
    const LunrData = lunarData;
    const currentId = LunrData.questions.length;
    this.highLightCode(elem);
    this.isTag(elem, 'H3')
      ? this.addAnchor(elem, LunrData.questions[currentId - 1])
      : '';
    this.isTag(elem, 'H4')
      ? this.addAnchor(elem, LunrData.questions[currentId - 1])
      : '';
    this.addTarget(elem);

    const $elem = $(elem);
    LunrData.questions[currentId - 1].body += $elem.prop('outerHTML');
    (!_.has(LunrData.questions[currentId - 1], 'childs') && this.isTag($elem, 'H3'))
      ? LunrData.questions[currentId - 1].childs = []
      : '';
    (!_.has(LunrData.questions[currentId - 1], 'childs') && this.isTag($elem, 'H4'))
      ? LunrData.questions[currentId - 1].childs = []
      : '';
    this.isTag($elem, 'H3')
      ? LunrData.questions[currentId - 1].childs.push({
        elId: this.buildIndex($elem.attr('id')),
        title: $(elem.firstChild).text(),
        level: 1,
      })
      : '';

    this.isTag($elem, 'H4')
      ? LunrData.questions[currentId - 1].childs.push({
        elId: this.buildIndex($elem.attr('id')),
        title: $(elem.firstChild).text(),
        level: 2,
      })
      : '';
  },
  addTarget(el) {
    $(el).find('a').attr('target', '_blank');
  },
  addAnchor(el, question) {
    const currentIndex = this.buildIndex($(el).attr('id'));
    const anchor = `${question.titleForIndex}>${currentIndex}`;
    const template = ContentAnchorTemplate({
      anchor: encodeURIComponent(anchor),
      currentIndex,
    });
    $(el).addClass('docs-heading');
    $(el).append(template);
  },
  startDoc(id) {
    const indx = Lunr((ctx) => {
      ctx.ref('id');
      ctx.field('title', {
        boost: 10,
      });
      ctx.field('tags', {
        boost: 100,
      });
      ctx.field('body');
      this.lunrData.questions.forEach((question) => {
        ctx.add(question);
      });
    });
    const indxStr = JSON.stringify(indx);
    window.idx = Lunr.Index.load(JSON.parse(indxStr));
    this.renderQuestionList(this.lunrData.questions);
    this.initListeners(this.lunrData.questions);
    this.urlNavigateTo(id);
  },
  renderQuestionList(qs) {
    this.hideMenu();
    let fstLvlOpened = false;
    const $nav = $('.documentation-menu');
    if (!qs.length) {
      $nav.addClass('empty');
      return;
    }
    $nav.removeClass('empty');
    _.each(qs, (q) => {
      const el = $(`.sidenav [data-question-id=${q.id}]`);

      const notExist = (el.length === 0);
      if (notExist) {
        this.addMenuItem(q, qs);
        return;
      }

      const hasParent = _.has(q, 'parentEl') && !fstLvlOpened;
      if (hasParent) {
        $(`.sidenav [data-question-id=${q.parentEl}]`).show();
        $('.sidenav').trigger('Show:section', [q.parentEl, true]);
        el.show().trigger('click', {
          navigate: false,
        });
        fstLvlOpened = true;
        return;
      }

      const hasSubMenus = _.has(q, 'elMap') && !_.has(q, 'parenEl') && !fstLvlOpened;
      if (hasSubMenus) {
        el.show();
        $('.sidenav').trigger('Show:section', [q.id, true]);
        fstLvlOpened = true;
        return;
      }

      if (!fstLvlOpened) {
        el.show().trigger('click', {
          navigate: false,
        });
        $('.sidenav').trigger('Show:section', [q.id, true]);
        fstLvlOpened = true;
        return;
      }
      el.show();
    });
  },
  hideMenu() {
    $('.sidenav li').each((i, el) => {
      $(el).hide();
    });
  },
  addMenuItem(q, questions) {
    const $menuItem = q;
    let parentItem;
    const isChild = _.has($menuItem, 'parentEl');

    if (!isChild) {
      $('.sidenav').append(MenuQuestionsListTemplate($menuItem));
    } else {
      parentItem = $(`.sidenav [data-question-id=${$menuItem.parentEl}]`);
      parentItem.hasClass('not-nested') ? parentItem.removeClass('not-nested') : '';
      parentItem.find('ul').append(MenuItemTemplate($menuItem));
    }
    const item = $(`.sidenav [data-question-id=${$menuItem.id}]`);
    $menuItem.$el = item;
    this.setMenuListener(item, $menuItem, questions);
  },
  setMenuListener(item, question, questions) {
    const isChild = _.has(question, 'parentEl');
    const sideNav = $('.sidenav');

    item.click((e, options) => {
      e.preventDefault();
      e.stopPropagation();
      if ($(e.currentTarget).hasClass('active')) {
        return;
      }
      let foundQuestion;
      let link;

      $('li', sideNav).removeClass('active');
      $(e.currentTarget).addClass('active');
      const navigate = (_.isObject(options) && _.has(options, 'navigate'))
        ? options.navigate
        : true;

      isChild ?
        sideNav.trigger('Select:section', question.id) :
        sideNav.trigger('Show:section', question.id);

      if (this.currentId !== question.id) {
        foundQuestion = questions.filter(q => (q.id === question.id))[0];
        this.renderQuestionView(foundQuestion);
        link = $(e.currentTarget).find('a').attr('href');
        navigate ? Router.navigate(link) : '';
      }
      navigate && this.contentScroll.scrollTop(0);
      if ($(e.currentTarget).hasClass('not-nested') || !$(e.currentTarget).children('ul.nav').length) {
        $('[data-js-content-dropdown]').parent().removeClass('open');
      }
      if (question.titleForIndex === 'Getting-started') {
        $('#permissions-map + table').addClass('permissions-map-table');
      }
      $('a', $('.b-docs__wrapper')).each((i, lnk) => {
        if (!$(lnk).hasClass('anchor') && $(lnk).attr('href')[0] === '/') {
          $(lnk).on('click', (event) => {
            event.preventDefault();
            Router.navigate($(event.currentTarget).attr('href'), { trigger: true });
          });
        }
      });
      $('table').each((i, table) => {
        BaronScroll($(table), null, { direction: 'h' });
      });
    });
  },
  initListeners(questions) {
    const $searchField = $('#search');
    $searchField.on('keyup', () => {
      if ($searchField.val() < 2) {
        this.renderQuestionList(questions);
        return;
      }
      const query = $searchField.val();
      const results = window.idx.search(query).map(
        result => questions.filter(q => q.id === parseInt(result.ref, 10))[0],
      );
      this.renderQuestionList(results);
    });

    $('[data-show-all]').click((e) => {
      e.preventDefault();
      this.renderQuestionList(questions);
      $(e.target).closest('.controls').find('input').val('');
    });

    $('[data-js-doc-menu] > .controls').click((e) => {
      e.preventDefault();
      if ($(e.currentTarget).hasClass('open') && $(e.target).hasClass('baron_scroller')) {
        $(e.currentTarget).removeClass('open');
      }
    });

    $('[data-js-content-dropdown]').click((e) => {
      e.preventDefault();
      $(e.currentTarget).parent().toggleClass('open');
    });

    $('[data-js-show-search]').click((e) => {
      e.preventDefault();
      $('[data-js-content-search]').show();
      $(e.currentTarget).hide();
      $('[data-js-content-dropdown]').hide();
    });

    $('[data-js-search-cancel]').click((e) => {
      e.preventDefault();
      $('[data-js-content-search]').hide();
      $('[data-js-show-search]').show();
      $('[data-js-content-dropdown]').show();
      $('[data-show-all]').trigger('click');
    });

    const sideNav = $('.sidenav');

    sideNav.on('Show:section', (e, id, open) => {
      _.each(questions, (section) => {
        if (_.has(section, 'parentEl')) {
          return;
        }
        if (section.id === id) {
          if (open) {
            section.$el.addClass('g-nav--open');
          } else {
            section.$el.hasClass('g-nav--open') ? section.$el.removeClass('g-nav--open') : section.$el.addClass('g-nav--open');
          }
          return;
        }
        section.$el.hasClass('g-nav--open')
          ? section.$el.removeClass('g-nav--open')
          : '';
      });
      $(e.target).trigger('Select:section', -1); // to light off all sub menu sections
    });

    sideNav.on('Select:section', (e, id) => {
      _.each(questions, (section) => {
        if (!_.has(section, 'parentEl')) {
          return;
        }
        if (section.id === id) {
          section.$el.hasClass('g-nav--scrolled')
            ? section.$el.removeClass('g-nav--scrolled')
            : '';
          return;
        }

        !section.$el.hasClass('g-nav--scrolled')
          ? section.$el.addClass('g-nav--scrolled')
          : '';
      });
    });
  },
  reInitListeners() {
    $('a.anchor').each((i, el) => {
      $(el).click((e) => {
        e.preventDefault();
        const link = $(e.currentTarget).attr('href');
        Router.navigate(link, { trigger: true });
      });
    });
    $('#toc').find('a').each((i, el) => {
      $(el).click((e) => {
        e.preventDefault();
        const link = $(e.target).attr('href');
        Router.navigate(link, { trigger: true });
      });
    });
  },
  renderSection(id) {
    this.renderQuestionList(this.lunrData.questions);
    this.urlNavigateTo(id);
  },
  renderQuestionView(question) {
    this.currentId = question.id;
    const $docWrapper = $('.b-docs__wrapper');
    $docWrapper.empty().append(ContentQuestionTemplate(question));
    this.reInitListeners([question]);
    this.initImgPopups();
    const regexp = /data-js-md-path="([A-Za-z0-9_/]*\.md)"/;
    const linkToMD = question.body.match(regexp);
    if (linkToMD && linkToMD[1] /* && !(linkToMD[1].indexOf('index.md') + 1) */) {
      $docWrapper.append('<a href="' +
        `https://github.com/reportportal/documentation/edit/master/${linkToMD[1].replace('/computeds', '')}`
        + '" class="edit-on-github" target="_blank">'
        + '<span>If you see inconsistencies, typos or want to add something, please</span>'
        + '<span class="color-blue">send us Pull Request into source</span>'
        + '</a>');
    }
    $docWrapper.trigger('Loaded', question.id);
    this.onScrollContent();
  },
  initImgPopups() {
    $('[data-js-doc-content] img').each(() => {
      const link = $(this).closest('a');
      $(this).wrap('<div class="image-wrap-table"><div class="image-wrap-table-cell"></div></div>');
      if (link.length) {
        link.click((e) => {
          e.preventDefault();
          Router.modals.show(new PreviewModal({ src: $(e.currentTarget).attr('href') }));
        });
        if (link.attr('href') && link.attr('href').indexOf('youtu.be') + 1) {
          link.addClass('video-preview');
        }
      }
    });
  },
  urlNavigateTo(id) {
    const questions = this.lunrData.questions;
    const query = !id ? [questions[0].titleForIndex] : decodeURIComponent(id).split('>');
    _.each(questions, (el, key) => {
      if (el.titleForIndex.trim() === query[0].trim()) {
        this.onContentLoadListener(el, query);
        this.renderQuestionView(questions[key]);
      }
    });
  },
  onContentLoadListener(el, query) {
    const $docWrapper = $('.b-docs__wrapper');
    const $sideNav = $('.sidenav');
    $docWrapper.on('Loaded', (e, id) => {
      if (id !== el.id) {
        return;
      }
      $sideNav.trigger('Select:section', el.id);
      if (_.has(el, 'parentEl')) {
        $sideNav.trigger('Show:section', el.parentEl);
      }
      el.$el.trigger('click', {
        navigate: true,
      });
      if (query.length > 1) {
        this.scrollTo(query[1]);
      }
      $docWrapper.off('Loaded');
    });
  },
  scrollTo(id) {
    let target;
    let offset;
    if (id === 'top') {
      offset = 0;
    } else {
      target = $(`[data-js-doc-content] #${id}`);
      offset = target.position().top;
    }
    this.contentScroll.stop().animate({
      scrollTop: offset,
    }, 500, 'swing');
  },
  highLightCode(el) {
    $('code', el).each((i, block) => {
      let language;
      const binaryContent = block.textContent;

      if ($(block).is('[class*="language-"]')) {
        _.each($(block).attr('class').split(' '), (className) => {
          if (className.indexOf('language-') + 1) {
            language = className.split('language-')[1];
          }
        });
      } else {
        language = 'xml';
      }
      const code = new CodeBlockWithHighlight({ language, binaryContent });
      $(block).replaceWith(code.$el.find('code'));
    });
  },
  destroy() {
    $(window).off('resize.documentation');
  },
};
