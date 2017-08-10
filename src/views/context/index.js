import Epoxy from 'backbone.epoxy';
import { $ } from 'backbone';
import template from './Context.jade';
import './Context.scss';

import IndexPage from 'pages/index-page';
import CommunityPage from 'pages/community-page';
import DocumentationPage from 'pages/documentation-page';

export default Epoxy.View.extend({
  template,
  className: 'main-context',
  initialize(options) {
    this.mainScrollEl = options.mainScrollEl;
    this.renderTemplate();
    this.currentPage = null;
    this.header = options.header;
  },
  onShow() {

  },
  renderIndex() {
    this.header.activatePage('');
    this.renderPage(IndexPage);
  },
  renderCommunity() {
    this.header.activatePage('community');
    this.renderPage(CommunityPage);
  },
  renderDocumentation(id) {
    if (this.currentPage && this.currentPage.$el.hasClass('documentation-page')) {
      this.currentPage.changeAnchor(id);
      return;
    }
    this.header.activatePage('documentation');
    this.currentPage && this.currentPage.destroy();
    this.currentPage = new DocumentationPage({ id, mainScrollEl: this.mainScrollEl });
    $('[data-js-content-container]', this.$el).html(this.currentPage.$el);
    this.currentPage.onShow && this.currentPage.onShow();
  },
  renderPage(pageView) {
    this.currentPage && this.currentPage.destroy();
    this.mainScrollEl.scrollTop(0);
    this.currentPage = new pageView({ mainScrollEl: this.mainScrollEl });
    $('[data-js-content-container]', this.$el).html(this.currentPage.$el);
    this.currentPage.onShow && this.currentPage.onShow();
  },
  onDestroy() {
    this.header && this.header.destroy();
    this.currentPage && this.currentPage.destroy();
  },
});
