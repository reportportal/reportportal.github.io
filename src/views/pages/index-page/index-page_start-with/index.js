import IndexPageSection from '../_indexPageSection';
import template from './index-page_start-with.jade';
import './index-page_start-with.scss';

export default IndexPageSection.extend({
  template,
  className: 'index-page_start-with',
  events: {

  },
  initialize() {
    this.renderTemplate();
  },
});
