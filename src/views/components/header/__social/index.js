import { $ } from 'backbone';
import Epoxy from 'backbone.epoxy';
import template from './header__social.jade';
import './header__social.scss';

export default Epoxy.View.extend({
  template,
  className: 'header__social',
  events: {
    'click [data-js-social-href]': 'openSocial',
  },
  initialize() {
    this.renderTemplate();
  },
  openSocial(e) {
    $(e.currentTarget).hasClass('icon-mail')
      ? window.location = $(e.currentTarget).attr('data-js-social-href')
      : window.open($(e.currentTarget).attr('data-js-social-href'));
  },
});
