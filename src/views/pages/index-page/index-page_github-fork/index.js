import Epoxy from 'backbone.epoxy';
import template from './index-page_github-fork.jade';
import './index-page_github-fork.scss';

export default Epoxy.View.extend({
  template,
  className: 'index-page_github-fork',
  events: {

  },
  initialize() {
    this.renderTemplate();
  },
});
