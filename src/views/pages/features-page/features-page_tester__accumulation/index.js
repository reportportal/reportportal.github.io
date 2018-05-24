import IndexPageSection from '../../sectionView';
import template from './features-page_tester__accumulation.jade';
import './features-page_tester__accumulation.scss';
import './animation.scss';
import { $ } from 'backbone';

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
  controlAnimation(scrollTop) {
    const animEl = $('[data-js-accumulation]', this.$el);
    if ($(document).width() > 992) {
      (scrollTop >= 1000 && scrollTop < 1400) ? animEl.addClass('animate-accumulation') : animEl.removeClass('animate-accumulation');
    } else if ($(document).width() > 767) {
      (scrollTop >= 1500 && scrollTop < 2100) ? animEl.addClass('animate-accumulation') : animEl.removeClass('animate-accumulation');
    } else {
      animEl.removeClass('animate-accumulation');
    }
  },
  getSections() {
    return [
      { checkScroll: this.checkScroll.bind(this),
        el: this.el,
        controlAnimation: this.controlAnimation.bind(this),
      },
    ];
  },
});
