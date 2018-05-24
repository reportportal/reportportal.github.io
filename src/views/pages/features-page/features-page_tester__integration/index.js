import IndexPageSection from '../../sectionView';
import { $ } from 'backbone';
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

  controlAnimation(scrollTop) {
    const animEl = $('[data-js-integration]', this.$el);
    if ($(document).width() > 992) {
      (scrollTop > 90 && scrollTop < 550) ? animEl.addClass('animate-integration') : animEl.removeClass('animate-integration');
    } else if ($(document).width() > 767) {
      (scrollTop > 190 && scrollTop < 800) ? animEl.addClass('animate-integration') : animEl.removeClass('animate-integration');
    } else {
      animEl.removeClass('animate-integration');
    }
  },

  getSections() {
    return [
      { checkScroll: this.checkScroll.bind(this),
        el: this.el,
        controlAnimation: this.controlAnimation.bind(this) },
    ];
  },
});
