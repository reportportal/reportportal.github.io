import IndexPageSection from '../../sectionView';
import template from './community-page_statistics.jade';
import './community-page_statistics.scss';
import './community-page_statistics__animate.scss';
import { $ } from 'backbone';


export default IndexPageSection.extend({
  template,
  className: 'community-page_statistics',
  events: {},
  initialize() {
    $.ajax({
      type: 'GET',
      url: '//status.reportportal.io',
      success: (data) => {
        $('[data-js-commits]', this.$el).html(data.github.contribution_stats.commits[12]);
        $('[data-js-contributors]', this.$el).html(data.github.contribution_stats.unique_contributors[12]);
        $('[data-js-issues]', this.$el).html(data.github.issue_stats.closed_issues);
        $('[data-js-stars]', this.$el).html(data.github.stars.repos.reportportal);
        $('[data-js-version]', this.$el).html(data.latest_versions.reportportal);
      },
    });
    this.renderTemplate();
  },
  getSections() {
    return [
      { checkScroll: this.checkScroll.bind(this), el: this.el },
    ];
  },
  checkScroll(scrollTop, scrollElTop) {
    if (scrollElTop < 1300) {
      this.$el.addClass('animate');
    }
    return false;
  },
});
