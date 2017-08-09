import IndexPageSection from '../../sectionView';
import template from './community-page_start-with.jade';
import './community-page_start-with.scss';
import './community-page_start-with__animate.scss';

export default IndexPageSection.extend({
  template,
  className: 'community-page_start-with',
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
    if (scrollElTop > 200) {
      this.$el.addClass('animate');
    }
    if (scrollElTop > 350) {
      this.$el.addClass('animate-items');
      return true;
    }
    return false;
  },
});
