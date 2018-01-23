import { $ } from 'backbone';
import Epoxy from 'backbone.epoxy';
import template from './tooltip.jade';
import './tooltip.scss';

export default Epoxy.View.extend({
  template,
  className: 'http-info',
  events: {
    'click [data-js-copy]': 'copyText'
  },
  initialize(info = {}) {
    this.renderTemplate(info);
  },
  copyText(e) {
    const $temp = $('<input>');
    $('body').append($temp);
    let copyVal = $('[data-js-copy-text]', this.$el).text();
    $temp.val(`{${copyVal}}`).select();
    document.execCommand('copy');
    $temp.remove();
    e.stopPropagation();
  },
});
