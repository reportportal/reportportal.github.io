import Backbone, { $ } from 'backbone';
import Context from '../views/context';
import BaronScroll from 'utils/baronScroll';

let instance = null;

const Router = Backbone.Router.extend({
  initialize() {
    const mainScrollEl = BaronScroll($('[data-js-main-page-container]'));
    this.context = new Context({ mainScrollEl });
    $('[data-js-main-page-container]').html(this.context.$el);
    this.context.onShow();
  },
  routes: {
    '': 'openIndex',
    documentation: 'openDocumentation',
    'documentation/:id': 'openDocumentation',
    '*invalidRoute': 'openIndex',
  },
  openIndex() {
    this.context.renderIndex();
  },
  openDocumentation(id) {
    this.context.renderDocumentation(id);
  },
});
function getInstance() {
  if (!instance) {
    instance = new Router();
  }
  return instance;
}

export default getInstance();
