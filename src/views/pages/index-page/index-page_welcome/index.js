import Epoxy from 'backbone.epoxy';
import template from './index-page_welcome.jade';
import './index-page_welcome.scss';

export default Epoxy.View.extend({
  template,
  className: 'index-page_welcome',
  events: {

  },
  initialize() {
    this.renderTemplate();
  },
});
