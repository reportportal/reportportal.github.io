import { $ } from 'backbone';
import IndexPageSection from '../_indexPageSection';
import template from './index-page_welcome.jade';
import './index-page_welcome.scss';
import './index-page_welcome__animate.scss';

export default IndexPageSection.extend({
  template,
  className: 'index-page_welcome',
  events: {

  },
  initialize() {
    this.renderTemplate();
    this.bg1 = $('[data-js-wave-1]', this.$el);
    this.bg2 = $('[data-js-wave-2]', this.$el);
    this.bg3 = $('[data-js-wave-3]', this.$el);
  },
  getSections() {
    return [
      { checkScroll: this.checkScroll.bind(this), el: this.el },
    ];
  },
  checkScroll(scrollTop, scrollElTop, scrollStart) {
    if (scrollElTop < 1300) {
      this.$el.addClass('animate');
    }
    const scrollEl = scrollTop - scrollStart;
    this.bg1.css({ transform: `translate(0, -${scrollEl / 4}px)` });
    this.bg2.css({ transform: `translate(0, -${scrollEl / 8}px)` });
    this.bg3.css({ transform: `translate(0, -${scrollEl / 15}px)` });
    return false;
  },
});
