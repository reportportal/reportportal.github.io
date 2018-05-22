import IndexPageSection from '../../sectionView';
import template from './features-page_scheme.jade';
import './features-page_scheme.scss';
import './animation.scss';

export default IndexPageSection.extend({
  template,
  className: 'features-page_scheme',
  initialize() {
    this.renderTemplate();
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
