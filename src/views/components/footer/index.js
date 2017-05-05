import { $ } from 'backbone';
import Epoxy from 'backbone.epoxy';
import template from './Footer.jade';
import './Footer.scss';

export default Epoxy.View.extend({
  template,
  className: 'footer',
  events: {
    'click [data-js-href]': 'openSocial',
  },
  initialize() {
    this.renderTemplate();
  },
  openSocial(e) {
    window.open($(e.currentTarget).attr('data-js-href'));
  },
});
