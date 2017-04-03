import IndexPageSection from '../_indexPageSection';
import template from './index-page_specification.jade';
import './index-page_specification.scss';
import './index-page_specification__animate.scss';

export default IndexPageSection.extend({
  template,
  className: 'index-page_specification',
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
    if (scrollElTop > 100) {
      this.$el.addClass('animate');
    }
    if (scrollElTop > 280) {
      this.$el.addClass('animate1-4');
    }
    if (scrollElTop > 600) {
      this.$el.addClass('animate animate5-8');
      return true;
    }
    return false;
  },
});
