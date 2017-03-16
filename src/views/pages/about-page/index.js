import template from './about-page.jade';
import './about-page.scss';
import Router from 'router'

export default Epoxy.View.extend({
    template: template,
    className: 'about-page',
    events: {
        'click [data-js-index-button]': 'onClickIndex',
    },
    initialize() {
        this.renderTemplate();
    },
    onClickIndex() {
        Router.navigate('', {trigger: true});
    }
})