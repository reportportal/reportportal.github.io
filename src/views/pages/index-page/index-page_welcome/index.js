import IndexPageSection from '../_indexPageSection';
import template from './index-page_welcome.jade';
import './index-page_welcome.scss';

export default IndexPageSection.extend({
  template,
  className: 'index-page_welcome',
  events: {

  },
  initialize() {
    this.renderTemplate();
  },
  getSections() {
    return [
      { checkScroll: this.checkScroll.bind(this), el: this.el },
    ];
  },
  checkScroll(scrollTop, scrollElTop) {
    console.log(`welcome - ${scrollElTop}`);
    if (scrollElTop < 1300) {
      this.$el.addClass('animate');
      return true;
    }
    return false;
  },
});
