import Epoxy from 'backbone.epoxy';
import { $ } from 'backbone';
import BaronScroll from 'utils/baronScroll';
import template from './Context.jade';
import './Context.scss';

import Header from '../components/header';

import IndexPage from 'pages/index-page';
import DocumentationPage from 'pages/documentation-page';

export default Epoxy.View.extend({
  template,
  className: 'main-context',
  initialize() {
    this.renderTemplate();
    this.currentPage = null;
    this.header = new Header();
    $('[data-js-header-container]', this.$el).html(this.header.$el);
  },
  onShow() {
    BaronScroll(this.$el);
  },
  renderIndex() {
    this.header.activatePage('');
    this.renderPage(IndexPage);
  },
  renderDocumentation() {
    this.header.activatePage('documentation');
    this.renderPage(DocumentationPage);
  },
  renderPage(pageView) {
    this.currentPage && this.currentPage.destroy();
    this.currentPage = new pageView();
    $('[data-js-content-container]', this.$el).html(this.currentPage.$el);
  },
  onDestroy() {
    this.header && this.header.destroy();
    this.currentPage && this.currentPage.destroy();
  },
});
