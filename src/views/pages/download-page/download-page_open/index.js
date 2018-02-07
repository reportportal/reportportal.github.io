import IndexPageSection from '../../sectionView';
import template from './download-page_open.jade';
import { $ } from 'backbone';
import './download-page_open.scss';
import './download-page_open__animate.scss';

export default IndexPageSection.extend({
  template,
  className: 'download-page_open',
  events: {
    'click [data-copy]': 'copyText',
  },
  initialize() {
    this.renderTemplate();
  },
  getSections() {
    return [
      { checkScroll: this.checkScroll.bind(this), el: this.el },
    ];
  },
  copyText(e) {
    const $temp = $('<input>');
    $('body').append($temp);
    const copyVal = $(e.target).attr('data-copy');
    $temp.val(copyVal).select();
    document.execCommand('copy');
    $temp.remove();
  },
  checkScroll(scrollTop, scrollElTop) {
    if (scrollElTop < 1300) {
      this.$el.addClass('animate');
      return true;
    }
    return false;
  },
});
