import IndexPageSection from '../_indexPageSection';
import template from './index-page_github-fork.jade';
import './index-page_github-fork.scss';

export default IndexPageSection.extend({
  template,
  className: 'index-page_github-fork',
  events: {

  },
  initialize() {
    this.renderTemplate();
  },
});
