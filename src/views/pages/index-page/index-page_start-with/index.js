import IndexPageSection from '../_indexPageSection';
import template from './index-page_start-with.jade';
import './index-page_start-with.scss';
import './index-page_start-with__animate.scss';

export default IndexPageSection.extend({
  template,
  className: 'index-page_start-with',
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
    if (scrollElTop > 350) {
      this.$el.addClass('animate-items');
      return true;
    }
    return false;
  },
});
