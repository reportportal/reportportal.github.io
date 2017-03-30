import Router from 'router';
import { $ } from 'backbone';
import Epoxy from 'backbone.epoxy';
import template from './Header.jade';
import './Header.scss';

import HeaderSocial from './__social';

export default Epoxy.View.extend({
  template,
  className: 'header',
  events: {
    'click [data-js-link]': 'onClickLink',
  },
  initialize() {
    this.renderTemplate();
    this.headerSocial = new HeaderSocial();
    $('[data-js-social-container]', this.$el).html(this.headerSocial.$el);
  },
  onClickLink(e) {
    const link = $(e.currentTarget).data('js-link') || '';
    Router.navigate(link, { trigger: true });
  },
  activatePage(context) {
    $('[data-js-link]', this.$el).removeClass('active');
    $(`[data-js-link="${context}"]`, this.$el).addClass('active');
  },
  onDestroy() {
    this.headerSocial && this.headerSocial.destroy();
  },
});
