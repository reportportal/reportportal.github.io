import IndexPageSection from '../_indexPageSection';
import template from './index-page_features.jade';
import './index-page_features.scss';

export default IndexPageSection.extend({
  template,
  className: 'index-page_features',
  events: {

  },
  initialize() {
    this.renderTemplate();
  },
});
