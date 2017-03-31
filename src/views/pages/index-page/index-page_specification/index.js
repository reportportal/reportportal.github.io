import IndexPageSection from '../_indexPageSection';
import template from './index-page_specification.jade';
import './index-page_specification.scss';

export default IndexPageSection.extend({
  template,
  className: 'index-page_specification',
  events: {

  },
  initialize() {
    this.renderTemplate();
  },
});
