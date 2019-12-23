import Backbone, { $ } from 'backbone';
import Context from '../views/context';
import BaronScroll from 'utils/baronScroll';

import Header from 'components/header';
import Modals from 'components/modals';

let instance = null;

const Router = Backbone.Router.extend({
  initialize() {
    const mainPageContainer = $('[data-js-main-page-container]');
    const mainScrollEl = BaronScroll(mainPageContainer);
    this.header = new Header({ mainScrollEl });
    $('[data-js-header-container]').html(this.header.$el);
    this.modals = new Modals();
    $('[data-js-modal-container]').html(this.modals.$el);
    this.context = new Context({ mainScrollEl, header: this.header });
    mainPageContainer.html(this.context.$el);
    this.context.onShow();
  },
  routes: {
    '': 'openIndex',
    docs: 'openDocumentation',
    'docs/:id': 'openDocumentation',
    community: 'openCommunity',
    installation: 'openInstallation',
    'installation/integration': 'openInstallationIntegration',
    features: 'openFeatures',
    '*invalidRoute': 'openIndex',
  },
  openIndex() {
    this.context.renderIndex();
    this.header.$el.addClass('without-shadow');
  },
  openCommunity() {
    this.context.renderCommunity();
    this.header.$el.addClass('without-shadow');
  },
  openDocumentation(id) {
    this.context.renderDocumentation(id);
    this.header.$el.removeClass('without-shadow');
  },
  openInstallation() {
    this.context.renderInstallation();
    this.header.$el.addClass('without-shadow');
  },
  openInstallationIntegration() {
    this.context.renderInstallationAndScroll();
    this.header.$el.addClass('without-shadow');
  },
  openFeatures() {
    this.context.renderFeatures();
    this.header.$el.addClass('without-shadow');
  },
});
function getInstance() {
  if (!instance) {
    instance = new Router();
  }
  return instance;
}

export default getInstance();
