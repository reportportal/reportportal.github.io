import { $ } from 'backbone';
import showdown from 'showdown';
import Router from 'router';
import MenuTemplate from './releases-page_menu/releases-page_menu.jade';

export default {
  init(sectionId, releasesData) {
    this.initData(releasesData);
    this.renderReleases(sectionId);
    this.initEventListeners();
  },

  initData(data) {
    const sortedData = this.sortDataByPublishedDate(data);

    this.menuItems = [];
    this.dataMap = sortedData.reduce((acc, item) => {
      acc[item.name] = item.body;
      this.menuItems.push({
        id: item.name,
        name: item.name,
        link: encodeURIComponent(item.name),
        externalLink: `https://github.com/reportportal/reportportal/releases/${item.tag_name}`,
        publishedDate: this.formatReleaseDate(item.published_at),
        prerelease: item.prerelease,
      });

      return acc;
    }, {});

    this.menuItems[0] = Object.assign(this.menuItems[0], {
      isLatest: true,
      externalLink: 'https://web.demo.reportportal.io/',
    });
  },

  sortDataByPublishedDate(data) {
    data.sort((a, b) => {
      const prevDate = new Date(a.published_at).valueOf();
      const nextDate = new Date(b.published_at).valueOf();

      return nextDate - prevDate;
    });

    return data;
  },

  formatReleaseDate(publishedDate) {
    const date = new Date(publishedDate).toString();
    const [, month, day, year] = date.split(' ');

    return `${month} ${day} ${year}`;
  },

  renderReleases(sectionId) {
    const selectedRelease = sectionId ? decodeURIComponent(sectionId) : this.menuItems[0].name;

    this.renderMenu(selectedRelease);
    this.renderContent(selectedRelease);
  },

  renderMenu(sectionId) {
    const node = $('[data-js-releases-menu]');
    const template = MenuTemplate({ menuItems: this.menuItems });

    node.html(template);

    if (sectionId) {
      this.highlightSection(sectionId);
    }
  },

  highlightSection(id) {
    $('.releases-menu-item.item-active').removeClass('item-active');
    const targetItem = $(`[data-js-menu-item-id="${id}"]`);
    const menuLinkItem = targetItem[0].querySelector('.menu-item-link');

    targetItem.addClass('item-active');

    this.updateDropdownSectionIfNeeded(menuLinkItem);
  },

  renderContent(sectionId) {
    const data = this.dataMap[sectionId];
    const node = $('[data-js-releases-content]');

    const converter = new showdown.Converter({
      omitExtraWLInCodeBlocks: true,
      parseImgDimensions: false,
      simplifiedAutoLink: true,
      literalMidWordUnderscores: true,
      strikethrough: true,
      tables: true,
      ghCodeBlocks: true,
      tasklists: true,
      smoothLivePreview: true,
      openLinksInNewWindow: true,
      ghCompatibleHeaderId: true,
      encodeEmails: true,
    });
    converter.setFlavor('github');
    const result = converter.makeHtml(this.applyGithubIssueLinks(data));

    node.html(result);
  },

  applyGithubIssueLinks(data) {
    const searchPattern = /(\[)?#[0-9]+(?![\]])/g;
    const matches = {};
    let matcher = searchPattern.exec(data);

    // find all #${issueId} github issue references to add markdown support for them
    while (matcher) {
      if (!matcher[1]) {
        const issueId = matcher[0];

        if (!matches[issueId]) {
          matches[issueId] = `[${issueId}](https://github.com/reportportal/reportportal/issues/${issueId.replace('#', '')})`;
        }
      }
      matcher = searchPattern.exec(data);
    }

    // replace found issue references with their markdown equivalent
    return Object.keys(matches).reduce((acc, item) => {
      const itemRegexp = new RegExp(`${item}\\b`, 'gi');

      return acc.replace(itemRegexp, matches[item]);
    }, data);
  },

  initEventListeners() {
    $('[data-js-releases-menu-nav]').on('click', event => this.menuItemClickHandler(event));
    $('[data-js-current-item-dropdown]').on('click', this.currentItemClickHandler);
  },

  menuItemClickHandler(event) {
    if (event.target.classList.contains('menu-item-link')) {
      event.preventDefault();
      this.updateDropdownSectionIfNeeded(event.target);
      const link = event.target.getAttribute('href');
      Router.navigate(link, { trigger: true });
    }
  },

  currentItemClickHandler() {
    const menuNode = document.querySelector('[data-js-releases-menu]');

    menuNode.classList.toggle('menu-open');
  },

  updateDropdownSectionIfNeeded(node) {
    const menuNode = document.querySelector('[data-js-releases-menu]');

    if (menuNode.classList.contains('menu-open')) {
      menuNode.classList.remove('menu-open');
    }

    $('[data-js-current-item-dropdown] > .current-item-title').html(node.innerText);
  },

  renderSection(id) {
    if (id) {
      const decodedId = decodeURIComponent(id);
      this.highlightSection(decodedId);
      this.renderContent(decodedId);
    }
  },

  removeEventListeners() {
    $('[data-js-releases-menu-nav]').unbind();
    $('[data-js-current-item-dropdown]').unbind();
  },

  destroy() {
    this.removeEventListeners();
  },
};
