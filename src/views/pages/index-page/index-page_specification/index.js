import Epoxy from 'backbone.epoxy';
import template from './index-page_specification.jade';
import './index-page_specification.scss';

export default Epoxy.View.extend({
  template,
  className: 'index-page_specification',
  events: {

  },
  initialize() {
    this.renderTemplate();
  },
});
