import Epoxy from 'backbone.epoxy';
import template from './Footer.jade';
import './Footer.scss';

export default Epoxy.View.extend({
  template,
  className: 'footer',
  events: {

  },
  initialize() {
    this.renderTemplate();
  },
});
