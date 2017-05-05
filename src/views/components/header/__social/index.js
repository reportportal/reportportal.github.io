import { $ } from 'backbone';
import Epoxy from 'backbone.epoxy';
import template from './header__social.jade';
import './header__social.scss';

export default Epoxy.View.extend({
  template,
  className: 'header__social',
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
