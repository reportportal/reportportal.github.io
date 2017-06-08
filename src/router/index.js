import Backbone, { $ } from 'backbone';
import Context from '../views/context';
import BaronScroll from 'utils/baronScroll';

import Header from 'components/header';
import Modals from 'components/modals';

let instance = null;

const Router = Backbone.Router.extend({
  initialize() {
    const mainScrollEl = BaronScroll($('[data-js-main-page-container]'));
    this.header = new Header({ mainScrollEl });
    $('[data-js-header-container]').html(this.header.$el);
    this.modals = new Modals();
    $('[data-js-modal-container]').html(this.modals.$el);
    this.context = new Context({ mainScrollEl, header: this.header });
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
    this.header.$el.addClass('without-shadow');
  },
  openDocumentation(id) {
    this.context.renderDocumentation(id);
    this.header.$el.removeClass('without-shadow');
  },
});
function getInstance() {
  if (!instance) {
    instance = new Router();
  }
  return instance;
}

export default getInstance();
