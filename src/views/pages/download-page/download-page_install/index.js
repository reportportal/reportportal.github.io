import IndexPageSection from '../../sectionView';
import template from './download-page_install.jade';
import './download-page_install.scss';
import './download-page_install__animate.scss';

export default IndexPageSection.extend({
  template,
  className: 'download-page_install',
  events: {
    'click [data-js-new-window]': 'openNewWindow',
  },
  initialize() {
    this.renderTemplate();
  },
  openNewWindow(e) {
    e.preventDefault();
    window.open(e.target.href);
  },
  getSections() {
    return [
      { checkScroll: this.checkScroll.bind(this), el: this.el },
    ];
  },
  checkScroll(scrollTop, scrollElTop) {
    if (scrollElTop < 1300) {
      this.$el.addClass('animate');
      return true;
    }
    return false;
  },
});
