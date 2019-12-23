import IndexPageSection from '../../sectionView';
import template from './installation-page_install.jade';
import './installation-page_install.scss';

export default IndexPageSection.extend({
  template,
  className: 'installation-page_install',
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
