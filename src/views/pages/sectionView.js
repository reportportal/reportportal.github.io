import Epoxy from 'backbone.epoxy';
import { $ } from 'backbone';

export default Epoxy.View.extend({
  getSections() {
    return [
      { checkScroll: () => false, el: this.el },
    ];
  },
  controlAnimation(className) {
    const windowHeight = $(window).height();
    let gridTop;
    let gridBottom;
    const thisTop = $(this.$el).offset().top + ($(this.$el).height() / 2);
    if ($(document).width() > 992) {
      gridTop = windowHeight * 0.3;
      gridBottom = windowHeight * 0.75;
    } else if ($(document).width() > 768) {
      gridTop = windowHeight * 0.13;
      gridBottom = windowHeight * 0.8;
    } else {
      $('[data-js-animation]', this.$el).removeClass(className);
      return;
    }
    if (thisTop > gridTop && thisTop < gridBottom) {
      $('[data-js-animation]', this.$el).addClass(className);
    } else {
      $('[data-js-animation]', this.$el).removeClass(className);
    }
  },
});
