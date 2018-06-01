import IndexPageSection from '../../sectionView';
import { $ } from 'backbone';
import template from './features-page_tester__integration.jade';
import './features-page_tester__integration.scss';
import './animation.scss';

export default IndexPageSection.extend({
  template,
  className: 'features-page_tester__integration',
  initialize() {
    this.animationClass;
    let elClass;
    const isIE = false || !!document.documentMode;
    const isEdge = !isIE && !!window.StyleMedia;
    if (isIE || isEdge) {
      elClass = 'ie-animation';
      this.animationClass = 'ie-animate-integration';
    } else {
      elClass = 'default-animation';
      this.animationClass = 'animate-integration';
    }
    this.renderTemplate();
    $(this.el).addClass(elClass);
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
        controlAnimation: this.controlAnimation.bind(this, this.animationClass) },
    ];
  },
});
