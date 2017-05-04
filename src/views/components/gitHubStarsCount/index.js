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
    $.ajax({
      type: 'GET',
      url: '//api.github.com/repos/reportportal/reportportal',
      success: (data) => {
        this.renderTemplate({ count: data.stargazers_count });
      },
    });
  },
  onDestroy() {
  },
});
