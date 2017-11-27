import IndexPageSection from '../../sectionView';
import template from './index-page_start-with.jade';
import './index-page_start-with.scss';
import './index-page_start-with__animate.scss';
import Gallery from 'components/gallery';
import { $ } from 'backbone';

export default IndexPageSection.extend({
  template,
  className: 'index-page_start-with',
  initialize() {
    this.renderTemplate();
    this.gallery = new Gallery();
    $('[data-js-gallery-container]', this.$el).html(this.gallery.$el);
  },
  getSections() {
    return [
      { checkScroll: this.checkScroll.bind(this), el: this.el },
    ];
  },
  checkScroll(scrollTop, scrollElTop) {
    if (scrollElTop > 150) {
      this.$el.addClass('animate');
    }
    if (scrollElTop > 350) {
      this.$el.addClass('animate-items');
    }
    if (scrollElTop > 570) {
      this.$el.addClass('animate-slider');
      return true;
    }
    return false;
  },
});
