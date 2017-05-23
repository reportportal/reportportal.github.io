import Router from 'router';
import { $ } from 'backbone';
import Epoxy from 'backbone.epoxy';
import template from './Header.jade';
import './Header.scss';

import HeaderSocial from './__social';
import GitHubStarsCount from 'components/gitHubStarsCount';

export default Epoxy.View.extend({
  template,
  className: 'header',
  events: {
    'click [data-js-link]': 'onClickLink',
    'click [data-js-toggle-sideblock]': 'onClickToggleSideblock',
    'click [data-js-side-content-close]': 'onClickCloseSideblock',
    'click [data-js-href]': 'openSocial',
  },
  initialize() {
    this.renderTemplate();
    this.headerSocial = new HeaderSocial();
    $('[data-js-social-container]', this.$el).html(this.headerSocial.$el);
    this.gitHubStarsCount = new GitHubStarsCount();
    $('[data-js-github-stars-container]', this.$el).html(this.gitHubStarsCount.$el);
    this.gitTopHubStarsCount = new GitHubStarsCount();
    $('[data-js-top-github-stars-container]', this.$el).html(this.gitTopHubStarsCount.$el);
  },
  onClickLink(e) {
    $('body').removeClass('side-open');
    const link = $(e.currentTarget).data('js-link') || '';
    Router.navigate(link, { trigger: true });
  },
  onClickToggleSideblock() {
    $('body').toggleClass('side-open');
  },
  onClickCloseSideblock() {
    $('body').removeClass('side-open');
  },
  openSocial(e) {
    $(e.currentTarget).hasClass('mail') ? window.location = ($(e.currentTarget).attr('data-js-href')) : window.open($(e.currentTarget).attr('data-js-href'));
  },
  activatePage(context) {
    $('[data-js-link]', this.$el).removeClass('active');
    $(`[data-js-link="${context}"]`, this.$el).addClass('active');
  },
  onDestroy() {
    this.headerSocial && this.headerSocial.destroy();
    this.gitHubStarsCount && this.gitHubStarsCount.destroy();
  },
});
