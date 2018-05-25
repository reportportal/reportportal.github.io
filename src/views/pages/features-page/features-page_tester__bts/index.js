import IndexPageSection from '../../sectionView';
import template from './features-page_tester__bts.jade';
import './features-page_tester__bts.scss';
import './animation.scss';
import { $ } from 'backbone';

export default IndexPageSection.extend({
  template,
  className: 'features-page_tester__bts',
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
    const animEl = $('[data-js-bts]', this.$el);
    if ($(document).width() > 992) {
      (scrollTop >= 2600 && scrollTop < 3000) ? animEl.addClass('animate-bts') : animEl.removeClass('animate-bts');
    } else if ($(document).width() > 767) {
      (scrollTop >= 4000 && scrollTop < 4600) ? animEl.addClass('animate-bts') : animEl.removeClass('animate-bts');
    } else {
      animEl.removeClass('animate-bts');
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
