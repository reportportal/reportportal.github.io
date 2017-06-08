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
    if (options.src.indexOf('.webm') + 1) {
      renderData.videoWebm = options.src;
      renderData.videoMp4 = options.src.replace('.webm', '.mp4');
      renderData.src = options.src.replace('.webm', '.png');
    } else {
      renderData.src = options.src;
    }
    this.renderTemplate(renderData);
  },
  onShow() {
    this.$el.width(); // for rerender
    this.$el.addClass('show');
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
  },
});
