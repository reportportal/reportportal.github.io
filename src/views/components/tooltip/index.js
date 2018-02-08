import { $ } from 'backbone';
import Epoxy from 'backbone.epoxy';
import template from './tooltip.jade';
import './tooltip.scss';

export default Epoxy.View.extend({
  template,
  className: 'http-info',
  events: {
    'click [data-js-copy]': 'copyText',
  },
  initialize(info = {}) {
    this.renderTemplate(info);
  },
  copyText(e) {
    const $temp = $('<textarea>');
    const brRegex = /<br\s*[\/]?>/gi;
    $('body').append($temp);
    const copyVal = $('[data-js-copy-text]', this.$el).html().replace(brRegex, '\r\n');
    $temp.val(`{${copyVal}}`).select();
    document.execCommand('copy');
    $temp.remove();
    e.stopPropagation();
  },
});
