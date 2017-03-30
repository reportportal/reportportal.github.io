import Epoxy from 'backbone.epoxy';
import template from './index-page_features.jade';
import './index-page_features.scss';

export default Epoxy.View.extend({
  template,
  className: 'index-page_features',
  events: {

  },
  initialize() {
    this.renderTemplate();
  },
});
