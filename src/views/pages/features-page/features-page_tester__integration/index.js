import IndexPageSection from '../../sectionView';
import template from './features-page_tester__integration.jade';
import './features-page_tester__integration.scss';
import './animation.scss';

export default IndexPageSection.extend({
  template,
  className: 'features-page_tester__integration',
  initialize() {
    this.renderTemplate();
  },

  checkScroll(scrollTop, scrollElTop) {
    if (scrollElTop < 1300) {
      this.$el.addClass('animate');
      return true;
    }
    return false;
  },

  getSections() {
    return [
      { checkScroll: this.checkScroll.bind(this),
        el: this.el,
        controlAnimation: this.controlAnimation.bind(this, 'animate-integration') },
    ];
  },
});
