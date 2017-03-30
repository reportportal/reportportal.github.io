import Epoxy from 'backbone.epoxy';
import template from './index-page_how-works.jade';
import './index-page_how-works.scss';

export default Epoxy.View.extend({
  template,
  className: 'index-page_how-works',
  events: {

  },
  initialize() {
    this.renderTemplate();
  },
});
