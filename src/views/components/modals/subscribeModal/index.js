import { $ } from 'backbone';
import Epoxy from 'backbone.epoxy';
import 'selectize';
import BaronScroll from 'utils/baronScroll';
import template from './SubscribeModal.jade';
import './SubscribeModal.scss';

export default Epoxy.View.extend({
  template,
  className: 'subscribe-modal',
  events: {
    'click .baron_scroller': 'onClickBackdrop',
    'click [data-js-cancel]': 'onCancel',
    'click [data-js-content]': 'onClickContent',
    'click [data-js-send]': 'onClickSend',
  },
  initialize() {
    this.renderTemplate();
    $(window).on('resize.subscribeModal', () => {
      this.resize();
    });
  },
  onShow() {
    this.$el.width();
    this.$el.addClass('show');
    this.resize();
    BaronScroll($('[data-js-content]', this.$el));
  },
  resize() {
    if ($(document).width() <= 767) {
      this.destroy();
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
  onCancel() {
    this.hide();
  },
  onClickSend() {
    this.hide();
  },
  onDestroy() {
    $(window).off('resize.subscribeModal');
  },
});
