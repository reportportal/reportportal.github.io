import { $ } from 'backbone';
import Epoxy from 'backbone.epoxy';
import template from './header__social.jade';
import './header__social.scss';

export default Epoxy.View.extend({
  template,
  className: 'header__social',
  events: {
  },
  initialize() {
    this.renderTemplate();
  },
});
