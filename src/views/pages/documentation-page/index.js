import Router from 'router';
import Epoxy from 'backbone.epoxy';
import template from './documentation-page.jade';
import './documentation-page.scss';

export default Epoxy.View.extend({
  template,
  className: 'documentation-page',
  events: {
    'click [data-js-index-button]': 'onClickIndex',
  },
  initialize() {
    this.renderTemplate();
  },
  onClickIndex() {
    Router.navigate('', { trigger: true });
  },
});
