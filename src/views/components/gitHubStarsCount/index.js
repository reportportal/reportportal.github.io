import { $ } from 'backbone';
import Epoxy from 'backbone.epoxy';
import template from './GitHubStarsCount.jade';
import './GitHubStarsCount.scss';

export default Epoxy.View.extend({
  template,
  className: 'github-stars-count',
  events: {
  },
  initialize() {
    this.renderTemplate();
    $('[data-js-star-icon]', this.$el).addClass('loading');
    $.ajax({
      type: 'GET',
      url: '//status.reportportal.io/github/stars',
      success: (data) => {
        $('[data-js-stars-count]', this.$el).html(data.repos.reportportal);
        $('[data-js-star-icon]', this.$el).removeClass('loading');
      },
    });
  },
  onDestroy() {
  },
});
