import Router from 'router';
import { $ } from 'backbone';
import Epoxy from 'backbone.epoxy';
import template from './Header.jade';
import './Header.scss';

import GitHubStarsCount from 'components/gitHubStarsCount';
import AskServiceButton from 'react-components/forms/header-buttons/headerButtons.jsx';

const WITHOUT_SHADOW_CLASS = 'without-shadow';

export default Epoxy.View.extend({
  template,
  className: 'header',
  events: {
    'click [data-js-link]': 'onClickLink',
    'click [data-js-toggle-sideblock]': 'onClickToggleSideblock',
    'click [data-js-side-content-close]': 'onClickCloseSideblock',
    'click [data-js-href]': 'openSocial',
    'click [data-js-logo]': 'onClickLogo',
    'click [data-js-modal]': 'onClickAskService',
  },
  initialize(options) {
    this.mainScrollEl = options.mainScrollEl;
    this.renderTemplate();
    this.gitHubStarsCount = new GitHubStarsCount();
    $('[data-js-github-stars-container]', this.$el).html(this.gitHubStarsCount.$el);
    this.scrollActivePage = false;
    this.mainScrollEl.scroll((e) => {
      if (this.scrollActivePage) {
        if (e.target.scrollTop) {
          this.$el.removeClass(WITHOUT_SHADOW_CLASS);
        } else {
          this.$el.addClass(WITHOUT_SHADOW_CLASS);
        }
      }
    });
    this.view = new AskServiceButton({ model: null, el: $('#header-buttons', this.$el) });
    $('#header-buttons', this.$el).append(this.view.render());
  },
  onClickLink(e) {
    e.preventDefault();
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
  onClickLogo() {
    Router.navigate('#', { trigger: true });
    this.mainScrollEl.stop().animate({
      scrollTop: 0,
    }, 500, 'swing');
  },
  openSocial(e) {
    $(e.currentTarget).hasClass('mail')
      ? window.location = ($(e.currentTarget).attr('data-js-href'))
      : window.open($(e.currentTarget).attr('data-js-href'));
  },
  activatePage(context) {
    $('[data-js-link]', this.$el).removeClass('active');
    $(`[data-js-link="${context}"]`, this.$el).addClass('active');
    if (context === '') {
      this.scrollActivePage = true;
      this.$el.addClass(WITHOUT_SHADOW_CLASS);
    } else {
      this.scrollActivePage = false;
      this.$el.removeClass(WITHOUT_SHADOW_CLASS);
    }
  },
  onDestroy() {
    this.headerSocial && this.headerSocial.destroy();
    this.gitHubStarsCount && this.gitHubStarsCount.destroy();
  },
});
