/* global LOCAL_DOCUMENTATION */
import Epoxy from 'backbone.epoxy';
import { $ } from 'backbone';
import docApi from './documentationAPI';
import template from './documentation-page.jade';
import './documentation-page.scss';
import Footer from 'components/footer';

export default Epoxy.View.extend({
  template,
  className: 'documentation-page',
  events: {
  },
  initialize(options) {
    this.idDocumentation = options.id;
    this.renderTemplate();
    this.$el.addClass('loading');
    this.getDocumentationHtml()
      .done(($documentation) => {
        this.$el.removeClass('loading');
        docApi.init(this.idDocumentation, $documentation);
      })
      .fail(() => {
        this.$el.addClass('unavailable');
      });
    this.footer = new Footer();
    $('[data-js-footer-container]', this.$el).html(this.footer.$el);
  },
  changeAnchor(id) {
    docApi.renderSection(id);
  },
  getDocumentationHtml() {
    const promiseProxy = $.Deferred();
    let url = '//reportportal.io/documentation/';
    if (LOCAL_DOCUMENTATION) {
      url = '/';
    }
    $.ajax({
      method: 'GET',
      dataType: 'html',
      url: `${url}documentation.html?n=${Math.round(1000 + (Math.random() * 1000))}`,
      success(data) {
        promiseProxy.resolve(data);
      },
      error() {
        promiseProxy.reject();
      },
    });
    return promiseProxy.promise();
  },
  onDestroy() {
    docApi.destroy();
    this.footer.destroy();
  },
});
