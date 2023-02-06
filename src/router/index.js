import Backbone, { $ } from 'backbone';
import Context from '../views/context';
import BaronScroll from 'utils/baronScroll';

import Header from 'components/header';
import Modals from 'components/modals';

let instance = null;

const redirectToRoute = (link) => {
  const currentRouter = getInstance();

  currentRouter.navigate(link, { trigger: true, replace: true });
};

const DOCS_URL = process.env.DOCUMENTATION_URL || 'https://reportportal.io/docs/';

const Router = Backbone.Router.extend({
  initialize() {
    const mainPageContainer = $('[data-js-main-page-container]');
    const mainScrollEl = BaronScroll(mainPageContainer);
    this.header = new Header({ mainScrollEl, DOCS_URL });
    $('[data-js-header-container]').html(this.header.$el);
    this.modals = new Modals();
    $('[data-js-modal-container]').html(this.modals.$el);
    this.context = new Context({ mainScrollEl, header: this.header });
    mainPageContainer.html(this.context.$el);
    this.context.onShow();
  },
  routes: {
    '': 'openIndex',
    pricing: 'openPricing',
    'legal/terms': 'openTerms',
    'blog/:blogName': 'openBlog',
    community: 'openCommunity',
    installation: 'openInstallation',
    'installation/integration': 'openInstallationIntegration',
    download: () => redirectToRoute('installation'),
    'download/integration': () => redirectToRoute('installation/integration'),
    features: 'openFeatures',
    releases: 'openReleases',
    'releases/:id': 'openReleases',
    '*invalidRoute': 'openIndex',
  },
  openIndex() {
    this.context.renderIndex();
    this.header.$el.addClass('without-shadow');
  },
  openPricing() {
    this.context.renderPricing();
    this.header.$el.addClass('without-shadow');
  },
  openTerms() {
    this.context.renderTerms();
    this.header.$el.addClass('without-shadow');
  },
  openBlog(blogName) {
    this.context.renderBlog(blogName);
    this.header.$el.addClass('without-shadow');
  },
  openCommunity() {
    this.context.renderCommunity();
    this.header.$el.addClass('without-shadow');
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
  openReleases(id) {
    this.context.renderReleases(id);
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
