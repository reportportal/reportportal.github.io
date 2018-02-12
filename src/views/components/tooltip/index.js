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
    $('body').append($temp);
    const copyVal = $('[data-js-copy-text]', this.$el).html().replace(/<br\s*[/]?>/gi, '\r\n');
    $temp.val(`{${copyVal}}`).select();
    document.execCommand('copy');
    $temp.remove();
    e.stopPropagation();
    $('[data-js-copy]', this.$el).text('Copied');
    setTimeout(() => {
      $('[data-js-copy]', this.$el).text('Copy');
    }, 1000);
  },
});
