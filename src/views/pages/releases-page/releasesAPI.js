import { $ } from 'backbone';
import showdown from 'showdown';
import Router from 'router';
import MenuTemplate from './releases-page_menu/releases-page_menu.jade';

const DOT_REPLACEMENT_SEQUENCE = 'd_o_t';

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
        link: this.encodeLink(item.name),
        externalLink: `https://github.com/reportportal/reportportal/releases/${item.tag_name}`,
        publishedDate: this.formatReleaseDate(item.published_at),
        prerelease: item.prerelease,
      });

      return acc;
    }, {});

    this.menuItems[0] = Object.assign(this.menuItems[0], {
      isLatest: true,
      externalLink: 'https://beta.demo.reportportal.io/',
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

  encodeLink(key) {
    const safetyKey = key.toString().replace(/\./gi, DOT_REPLACEMENT_SEQUENCE);

    return encodeURIComponent(safetyKey);
  },

  decodeLink(key) {
    const searchPattern = new RegExp(`${DOT_REPLACEMENT_SEQUENCE}`, 'gi');
    const safetyKey = key.toString().replace(searchPattern, '.');

    return decodeURIComponent(safetyKey);
  },

  formatReleaseDate(publishedDate) {
    const date = new Date(publishedDate).toString();
    const [, month, day, year] = date.split(' ');

    return `${month} ${day} ${year}`;
  },

  renderReleases(sectionId) {
    const selectedRelease = sectionId ? this.decodeLink(sectionId) : this.menuItems[0].name;

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

    targetItem.addClass('item-active');
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
          matches[issueId] = `[${issueId}](https://github.com/reportportal/reportportal/issues/${issueId})`;
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
    $('.releases-menu-nav').on('click', this.menuItemClickHandler);
  },

  menuItemClickHandler(event) {
    if (event.target.classList.contains('menu-item-link')) {
      event.preventDefault();
      const link = event.target.getAttribute('href');
      Router.navigate(link, { trigger: true });
    }
  },

  renderSection(id) {
    if (id) {
      const decodedId = this.decodeLink(id);
      this.highlightSection(decodedId);
      this.renderContent(decodedId);
    }
  },

  removeEventListeners() {
    $('.releases-menu-nav').unbind();
  },

  destroy() {
    this.removeEventListeners();
  },
};
