import IndexPageSection from '../_indexPageSection';
import template from './index-page_features.jade';
import './index-page_features.scss';

export default IndexPageSection.extend({
  template,
  className: 'index-page_features',
  events: {

  },
  initialize() {
    this.renderTemplate();
  },
  getSections() {
    return [
      { checkScroll: this.checkScroll.bind(this), el: this.el },
    ];
  },
  checkScroll(scrollTop, scrollElTop) {
    if (scrollElTop > 400) {
      this.$el.addClass('animate animate1-3');
    }
    if (scrollElTop > 840) {
      this.$el.addClass('animate animate4-6');
      return true;
    }
    return false;
  },
});
