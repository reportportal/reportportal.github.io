import template from './index-page.jade';
import './index-page.scss';
import Router from 'router';

export default Epoxy.View.extend({
    template: template,
    className: 'index-page',
    events: {
        'click [data-js-about-page]': 'onClickAbout',
    },
    initialize() {
        this.renderTemplate();
    },
    onClickAbout() {
        Router.navigate('about', {trigger: true});
    },
    testMethod(n) {
        return n+1;
    }
})