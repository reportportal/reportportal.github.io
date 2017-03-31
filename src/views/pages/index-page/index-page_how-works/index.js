import IndexPageSection from '../_indexPageSection';
import template from './index-page_how-works.jade';
import './index-page_how-works.scss';

export default IndexPageSection.extend({
  template,
  className: 'index-page_how-works',
  events: {

  },
  initialize() {
    this.renderTemplate();
  },
});
