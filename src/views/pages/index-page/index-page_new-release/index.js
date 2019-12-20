import IndexPageSection from '../../sectionView';
import template from './index-page_new-release.jade';
import './index-page_new-release.scss';
import './index-page_new-release__animate.scss';

export default IndexPageSection.extend({
  template,
  className: 'index-page_new-release',
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
      return true;
    }
    return false;
  },
});
