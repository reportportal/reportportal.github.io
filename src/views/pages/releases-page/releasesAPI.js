import { $ } from 'backbone';
import Router from 'router';

import MenuTemplate from './releases-page_menu/releases-page_menu.jade';
// import ContentTemplate from './releases-page_content/releases-page_content.jade';

const DOT_REPLACEMENT_SEQUENCE = 'd_o_t';

export default {
  init(sectionId, releasesData) {
    this.initData(releasesData);
    this.renderReleases(sectionId);
    this.initEventListeners();
  },

  initData(data) {
    this.menuItems = [];
    this.dataMap = data.reduce((acc, item) => {
      acc[item.name] = item.body;
      this.menuItems.push({
        id: item.name,
        name: item.name,
        link: this.encodeLink(item.name),
        publishedDate: this.formatReleaseDate(item.published_at),
        prerelease: item.prerelease,
      });

      return acc;
    }, {});
    console.log(this.dataMap);
    this.menuItems[0].isLatest = true;
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
    // const template = ContentTemplate({ data });

    node.html(data);
  },

  initEventListeners() {
    $('.releases-menu-nav').on('click', this.menuItemClickHandler);
  },

  menuItemClickHandler(event) {
    event.preventDefault();
    if (event.target.classList.contains('menu-item-link')) {
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
