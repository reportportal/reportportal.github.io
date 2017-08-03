import IndexPageSection from '../../_indexPageSection';
import template from './index-page_github-fork.jade';
import './index-page_github-fork.scss';
import './index-page_github-fork__animate.scss';

export default IndexPageSection.extend({
  template,
  className: 'index-page_github-fork',
  events: {
    'click [data-js-fork-button]': 'onClickFork',
  },
  initialize() {
    this.renderTemplate();
  },
  getSections() {
    return [
      { checkScroll: this.checkScroll.bind(this), el: this.el },
    ];
  },
  onClickFork() {
    window.open('https://github.com/reportportal/reportportal');
  },
  checkScroll(scrollTop, scrollElTop) {
    if (scrollElTop > 170) {
      this.$el.addClass('animate');
      return true;
    }
    return false;
  },
});
