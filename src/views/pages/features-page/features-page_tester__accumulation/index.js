import IndexPageSection from '../../sectionView';
import template from './features-page_tester__accumulation.jade';
import './features-page_tester__accumulation.scss';
import './animation.scss';

export default IndexPageSection.extend({
  template,
  className: 'features-page_tester__accumulation',
  initialize() {
    this.renderTemplate();
  },
  checkScroll(scrollTop, scrollElTop) {
    if (scrollElTop > 230) {
      this.$el.addClass('animate');
      return true;
    }
    return false;
  },
  getSections() {
    return [
      { checkScroll: this.checkScroll.bind(this), el: this.el },
    ];
  },
});
