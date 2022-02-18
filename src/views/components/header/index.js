import Router from 'router';
import { $ } from 'backbone';
import Epoxy from 'backbone.epoxy';
import template from './Header.jade';
import './Header.scss';
import AskServiceModal from 'components/modals/askServiceModal';

import GitHubStarsCount from 'components/gitHubStarsCount';

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
  onClickAskService(e) {
    e.preventDefault();
    Router.modals.show(new AskServiceModal());
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
