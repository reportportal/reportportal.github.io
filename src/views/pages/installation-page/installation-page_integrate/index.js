import IndexPageSection from '../../sectionView';
import Router from 'router';
import SchemeModal from 'components/modals/schemeModal';
import template from './installation-page_integrate.jade';
import './installation-page_integrate.scss';

export default IndexPageSection.extend({
  template,
  className: 'installation-page_integrate',
  events: {
    'click [data-js-scheme]': 'showScheme',
    'click [data-js-new-window]': 'openNewWindow',
  },
  initialize() {
    this.renderTemplate();
  },
  showScheme(e) {
    e.preventDefault();
    Router.modals.show(new SchemeModal());
  },
  getSections() {
    return [
      { checkScroll: this.checkScroll.bind(this), el: this.el },
    ];
  },
  openNewWindow(e) {
    e.preventDefault();
    window.open(e.target.href || e.target.parentNode.href);
  },
  checkScroll(scrollTop, scrollElTop) {
    if (scrollElTop < 1300) {
      this.$el.addClass('animate');
      return true;
    }
    return false;
  },
});
