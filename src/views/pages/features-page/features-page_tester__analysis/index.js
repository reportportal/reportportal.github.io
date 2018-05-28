import IndexPageSection from '../../sectionView';
import template from './features-page_tester__analysis.jade';
import './features-page_tester__analysis.scss';
import './animation.scss';

export default IndexPageSection.extend({
  template,
  className: 'features-page_tester__analysis bg-darken',
  initialize() {
    this.renderTemplate();
  },
  checkScroll(scrollTop, scrollElTop) {
    if (scrollElTop > 250) {
      this.$el.addClass('animate');
      return true;
    }
    return false;
  },
  getSections() {
    return [
      { checkScroll: this.checkScroll.bind(this),
        el: this.el,
        controlAnimation: this.controlAnimation.bind(this, 'animate-analysis'),
      },
    ];
  },
});
