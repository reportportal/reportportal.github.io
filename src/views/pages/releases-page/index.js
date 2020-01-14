import Epoxy from 'backbone.epoxy';
import { $ } from 'backbone';
import Footer from 'components/footer';
import releasesApi from './releasesAPI';
import template from './releases-page.jade';
import './releases-page.scss';

export default Epoxy.View.extend({
  template,
  className: 'releases-page',
  events: {
  },
  initialize(options) {
    options.mainScrollEl.scrollTop(0);
    const releaseId = options.id;
    this.renderTemplate();
    this.$el.addClass('loading');
    this.getReleases()
      .done(($documentation) => {
        this.$el.removeClass('loading');
        releasesApi.init(releaseId, $documentation);
      })
      .fail(() => {
        this.$el.addClass('unavailable');
      });
    this.footer = new Footer();
    $('[data-js-footer-container]', this.$el).html(this.footer.$el);
  },
  changeAnchor(id) {
    releasesApi.renderSection(id);
  },
  getReleases() {
    const promiseProxy = $.Deferred();
    const url = 'https://api.github.com/repos/reportportal/reportportal/releases';

    $.ajax({
      method: 'GET',
      contentType: 'application/json',
      url,
      success(d) {
        promiseProxy.resolve(d);
      },
      error() {
        promiseProxy.reject();
      },
    });
    return promiseProxy.promise();
  },
  onDestroy() {
    releasesApi.destroy();
    this.footer.destroy();
  },
});
