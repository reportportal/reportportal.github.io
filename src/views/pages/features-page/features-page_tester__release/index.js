import IndexPageSection from '../../sectionView';
import template from './features-page_tester__release.jade';
import './features-page_tester__release.scss';
import './animation.scss';
import { $ } from 'backbone';

export default IndexPageSection.extend({
  template,
  className: 'features-page_tester__release bg-darken',
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
    const animEl = $('[data-js-release]', this.$el);
    if ($(document).width() > 992) {
      (scrollTop >= 3000) ? animEl.addClass('animate-release') : animEl.removeClass('animate-release');
    } else if ($(document).width() > 767) {
      (scrollTop >= 4600) ? animEl.addClass('animate-release') : animEl.removeClass('animate-release');
    } else {
      animEl.removeClass('animate-release');
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
