import IndexPageSection from '../../_indexPageSection';
import template from './index-page_features.jade';
import './index-page_features.scss';
import './index-page_features__animate.scss';

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
    if (scrollElTop > 150) {
      this.$el.addClass('animate');
    }
    if (scrollElTop > 500) {
      this.$el.addClass('animate1-3');
    }
    if (scrollElTop > 840) {
      this.$el.addClass('animate animate4-6');
      return true;
    }
    return false;
  },
});
