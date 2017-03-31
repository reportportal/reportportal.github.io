import Epoxy from 'backbone.epoxy';
import template from './index-page_start-with.jade';
import './index-page_start-with.scss';

export default Epoxy.View.extend({
  template,
  className: 'index-page_start-with',
  events: {

  },
  initialize() {
    this.renderTemplate();
  },
});
