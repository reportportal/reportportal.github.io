import IndexPageSection from '../../sectionView';
import template from './installation-page_open.jade';
import { $ } from 'backbone';
import './installation-page_open.scss';

export default IndexPageSection.extend({
  template,
  className: 'installation-page_open',
  events: {
    'click [data-copy]': 'copyText',
    'click [data-js-new-window]': 'openNewWindow',
  },
  initialize() {
    this.renderTemplate();
  },
  getSections() {
    return [
      { checkScroll: this.checkScroll.bind(this), el: this.el },
    ];
  },
  openNewWindow(e) {
    e.preventDefault();
    window.open(e.target.href);
  },
  copyText(e) {
    const $temp = $('<input>');
    $('body').append($temp);
    const copyVal = $(e.target).attr('data-copy');
    $temp.val(copyVal).select();
    document.execCommand('copy');
    $temp.remove();
    $(`[data-copy=${copyVal}]`, this.$el).text('Copied');
    setTimeout(() => {
      $(`[data-copy=${copyVal}]`, this.$el).text('Copy');
    }, 1000);
  },
  checkScroll(scrollTop, scrollElTop) {
    if (scrollElTop < 1300) {
      this.$el.addClass('animate');
      return true;
    }
    return false;
  },
});
