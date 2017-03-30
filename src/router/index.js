import Backbone, { $ } from 'backbone';
import Context from '../views/context';

let instance = null;

const Router = Backbone.Router.extend({
  initialize() {
    this.context = new Context();
    $('[data-js-main-page-container]').html(this.context.$el);
  },
  routes: {
    '': 'openIndex',
    documentation: 'openDocumentation',
  },
  openIndex() {
    this.context.renderIndex();
  },
  openDocumentation() {
    this.context.renderDocumentation();
  },
});
function getInstance() {
  if (!instance) {
    instance = new Router();
  }
  return instance;
}

export default getInstance();
