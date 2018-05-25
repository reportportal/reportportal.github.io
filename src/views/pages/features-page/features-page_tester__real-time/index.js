import IndexPageSection from '../../sectionView';
import { $ } from 'backbone';
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
  controlAnimation(scrollTop) {
    const animEl = $('[data-js-real-time]', this.$el);
    if ($(document).width() > 992) {
      if (scrollTop >= 550 && scrollTop < 1000) {
        animEl.addClass('animate-real-time');
      } else {
        animEl.removeClass('animate-real-time');
      }
    } else if ($(document).width() > 767 && scrollTop >= 800 && scrollTop < 1500) {
      animEl.addClass('animate-real-time');
    } else {
      animEl.removeClass('animate-real-time');
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
