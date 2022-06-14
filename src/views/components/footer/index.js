import { $ } from 'backbone';
import Epoxy from 'backbone.epoxy';
import template from './Footer.jade';
import './Footer.scss';

import GitHubStarsCount from 'components/gitHubStarsCount';

export default Epoxy.View.extend({
  template,
  className: 'footer',
  events: {
    'click [data-js-href]': 'openSocial',
    'click [data-js-epam-logo]': 'onClickEPAM',
  },
  initialize() {
    this.renderTemplate();
    this.gitHubStarsCount = new GitHubStarsCount();
    $('[data-js-github-stars-container]', this.$el).html(this.gitHubStarsCount.$el);
    this.gitTopHubStarsCount = new GitHubStarsCount();
    $('[data-js-top-github-stars-container]', this.$el).html(this.gitTopHubStarsCount.$el);
  },
  openSocial(e) {
    window.open($(e.currentTarget).attr('data-js-href'));
  },
  onClickEPAM() {
    window.open('https://www.epam.com/');
  },
});
