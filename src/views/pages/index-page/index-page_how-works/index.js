import { $ } from 'backbone';
import IndexPageSection from '../_indexPageSection';
import template from './index-page_how-works.jade';
import './index-page_how-works.scss';
import './index-page_how-works__animate.scss';

export default IndexPageSection.extend({
  template,
  className: 'index-page_how-works',
  events: {

  },
  initialize() {
    this.renderTemplate();
  },
  getSections() {
    const getBlock = number => $(`[data-js-block-${number}]`, this.$el).get(0);
    return [
      { checkScroll: this.checkScrollMain.bind(this), el: this.el },
      { checkScroll: this.checkScroll(getBlock(1)), el: getBlock(1) },
      { checkScroll: this.checkScroll(getBlock(2)), el: getBlock(2) },
      { checkScroll: this.checkScroll(getBlock(3)), el: getBlock(3) },
      { checkScroll: this.checkScroll(getBlock(4)), el: getBlock(4) },
      { checkScroll: this.checkScroll(getBlock(5)), el: getBlock(5) },
      { checkScroll: this.checkScroll(getBlock(6)), el: getBlock(6) },
    ];
  },
  checkScrollMain(scrollTop, scrollElTop) {
    if (scrollElTop > 150) {
      this.$el.addClass('animate');
      return true;
    }
    return false;
  },
  checkScroll(el) {
    return (scrollTop, scrollElTop) => {
      if (scrollElTop > 300) {
        $(el).addClass('animate');
        return true;
      }
      return false;
    };
  },
});
