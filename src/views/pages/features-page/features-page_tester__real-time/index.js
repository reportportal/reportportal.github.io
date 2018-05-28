import IndexPageSection from '../../sectionView';
import template from './features-page_tester__real-time.jade';
import './features-page_tester__real-time.scss';
import './animation.scss';

export default IndexPageSection.extend({
  template,
  className: 'features-page_tester__real-time bg-darken',
  initialize() {
    this.renderTemplate();
  },
  checkScroll(scrollTop, scrollElTop) {
    if (scrollElTop > 200) {
      this.$el.addClass('animate');
      return true;
    }
    return false;
  },
  getSections() {
    return [
      { checkScroll: this.checkScroll.bind(this),
        el: this.el,
        controlAnimation: this.controlAnimation.bind(this, 'animate-real-time'),
      },
    ];
  },
});
