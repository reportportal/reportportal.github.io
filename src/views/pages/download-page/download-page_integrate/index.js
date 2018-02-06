import IndexPageSection from '../../sectionView';
import Router from 'router';
import SchemeModal from 'components/modals/schemeModal';
import template from './download-page_integrate.jade';
import './download-page_integrate.scss';
import './download-page_integrate__animate.scss';

export default IndexPageSection.extend({
  template,
  className: 'download-page_integrate',
  events: {
    'click [data-js-scheme]': 'showScheme',
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
  checkScroll(scrollTop, scrollElTop) {
    if (scrollElTop < 1300) {
      this.$el.addClass('animate');
      return true;
    }
    return false;
  },
});
