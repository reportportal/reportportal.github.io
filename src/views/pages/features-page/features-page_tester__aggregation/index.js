import IndexPageSection from '../../sectionView';
import template from './features-page_tester__aggregation.jade';
import './features-page_tester__aggregation.scss';
import './animation.scss';
import { $ } from 'backbone';

export default IndexPageSection.extend({
  template,
  className: 'features-page_tester__aggregation bg-darken',
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
    const animEl = $('[data-js-aggregation]', this.$el);
    if ($(document).width() > 992) {
      (scrollTop >= 1400 && scrollTop < 1800) ? animEl.addClass('animate-aggregation') : animEl.removeClass('animate-aggregation');
    } else if ($(document).width() > 767) {
      (scrollTop >= 2160 && scrollTop < 2835) ? animEl.addClass('animate-aggregation') : animEl.removeClass('animate-aggregation');
    } else {
      animEl.removeClass('animate-aggregation');
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
