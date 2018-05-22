import IndexPageSection from '../../sectionView';
import { $ } from 'backbone';
import template from './features-page_switcher.jade';
import './features-page_switcher.scss';
import './animation.scss';

export default IndexPageSection.extend({
  template,
  className: 'features-page_switcher',
  events: {
    'click [data-js-is-slider]': 'onChangeSlider',
  },
  initialize() {
    this.renderTemplate();
  },
  onChangeSlider(e) {
    const input = $('[data-js-is-tester]', this.$el);
    input.prop('checked', !input.prop('checked'));
    $('[data-js-slider-option]', this.$el).toggleClass('active');
    e.preventDefault();
  },
  checkScroll(scrollTop, scrollElTop) {
    if (scrollElTop < 1300) {
      this.$el.addClass('animate');
      return true;
    }
    return false;
  },
  getSections() {
    return [
      { checkScroll: this.checkScroll.bind(this), el: this.el },
    ];
  },
});
