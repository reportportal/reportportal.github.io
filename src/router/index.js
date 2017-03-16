import IndexPage from 'pages/index-page';
import AboutPage from 'pages/about-page';


let instance = null;
let currentPage = null;
const Router = Backbone.Router.extend({
    initialize() {

    },
    routes: {
        '': 'openIndex',
        'about': 'openTest',
    },
    openIndex() {
        renderPage(IndexPage);
    },
    openTest() {
        renderPage(AboutPage);
    }
});
function renderPage(pageView) {
    currentPage && currentPage.destroy();
    currentPage = new pageView();
    $('[data-js-main-page-container]').html(currentPage.$el);
};
function getInstance() {
    if(!instance) {
        instance = new Router();
    }
    return instance;
}

export default getInstance();