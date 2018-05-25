import IndexPageSection from '../../sectionView';
import template from './features-page_tester__classification.jade';
import './features-page_tester__classification.scss';
import './animation.scss';
import { $ } from 'backbone';

export default IndexPageSection.extend({
  template,
  className: 'features-page_tester__classification',
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
  controlAnimation(scrollTop) {
    const animEl = $('[data-js-classification]', this.$el);
    if ($(document).width() > 992) {
      (scrollTop >= 1800 && scrollTop < 2200) ? animEl.addClass('animate-classification') : animEl.removeClass('animate-classification');
    } else if ($(document).width() > 767) {
      (scrollTop >= 2900 && scrollTop < 3400) ? animEl.addClass('animate-classification') : animEl.removeClass('animate-classification');
    } else {
      animEl.removeClass('animate-classification');
    }
  },
  getSections() {
    return [
      { checkScroll: this.checkScroll.bind(this),
        el: this.el,
        controlAnimation: this.controlAnimation.bind(this)
      },
    ];
  },
});
