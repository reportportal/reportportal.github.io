import { $ } from 'backbone';
import Epoxy from 'backbone.epoxy';
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
  },
  onShow() {
    this.$el.width();
    this.$el.addClass('show');
    BaronScroll($('[data-js-content]', this.$el));
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
});
