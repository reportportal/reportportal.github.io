import IndexPageSection from '../../sectionView';
import template from './features-page_tester__analysis.jade';
import './features-page_tester__analysis.scss';
import './animation.scss';
import { $ } from 'backbone';

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
  controlAnimation(scrollTop) {
    const animEl = $('[data-js-analysis]', this.$el);
    if ($(document).width() > 992) {
      (scrollTop >= 2200 && scrollTop < 2600) ? animEl.addClass('animate-analysis') : animEl.removeClass('animate-analysis');
    } else if ($(document).width() > 767) {
      (scrollTop >= 3400 && scrollTop < 4000) ? animEl.addClass('animate-analysis') : animEl.removeClass('animate-analysis');
    } else {
      animEl.removeClass('animate-analysis');
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
