import { $ } from 'backbone';
import Epoxy from 'backbone.epoxy';
import template from './PreviewModal.jade';
import './PreviewModal.scss';

export default Epoxy.View.extend({
  template,
  className: 'preview-modal',

  events: {
    'click [data-js-backdrop]': 'onClickBackdrop',
    'click [data-js-content]': 'onClickContent',
  },

  initialize(options) {
    const renderData = {};
    this.iframeMode = false;
    if (options.src.indexOf('youtu.be') + 1) {
      this.iframeMode = true;
      const urlSplit = options.src.split('/');
      renderData.videoId = urlSplit[urlSplit.length - 1];
    } else {
      renderData.src = options.src;
    }
    this.renderTemplate(renderData);
    $(window).on('resize.previewModal', () => {
      this.resize();
    });
  },
  onShow() {
    this.$el.width(); // for rerender
    this.$el.addClass('show');
    this.resize();
  },
  resize() {
    if (this.iframeMode) {
      const width = $('[data-js-content]', this.$el).width();
      $('[data-js-content]', this.$el).height((width * 768) / 1000);
    }
  },
  hide() {
    this.$el.removeClass('show');
    setTimeout(() => {
      this.destroy();
    }, 320);
  },
  onClickContent(e) {
    e.stopPropagation();
  },
  onClickBackdrop() {
    this.hide();
  },
  onDestroy() {
    $(window).off('resize.previewModal');
  },
});
