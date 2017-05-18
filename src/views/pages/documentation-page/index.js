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
    this.getDocumentationHtml().done(($documentation) => {
      docApi.init(this.idDocumentation, $documentation);
    });
    this.footer = new Footer();
    $('[data-js-footer-container]', this.$el).html(this.footer.$el);
  },
  changeAnchor(id) {
    docApi.renderSection(id);
  },
  getDocumentationHtml() {
    const async = $.Deferred();
    $.ajax({
      method: 'GET',
      dataType: 'html',
      url: `//reportportal.io/documentation/documentation.html?n=${Math.round(1000 + (Math.random() * 1000))}`,
      success(data) {
        async.resolve($(data));
      },
      error() {
        async.reject();
      },
    });
    return async.promise();
  },

});
