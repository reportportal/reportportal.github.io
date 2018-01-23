import IndexPageSection from '../../sectionView';
import template from './download-page_configure.jade';
import { $ } from 'backbone';
import './download-page_configure.scss';
import './download-page_configure__animate.scss';
import DownloadByUrl from 'download-url-file';
import GenerateComposeModal from 'components/modals/GenerateComposeModal';
import Router from 'router';

export default IndexPageSection.extend({
  template,
  className: 'download-page_config',
  events: {
    'click [data-copy]': 'copyText',
    'click [data-js-download-default]': 'downloadDefaultFile',
    'click [data-js-configure-file]': 'configureFile',
  },
  initialize() {
    this.renderTemplate();
  },
  getSections() {
    return [
      { checkScroll: this.checkScroll.bind(this), el: this.el },
    ];
  },
  configureFile(){
    Router.modals.show(new GenerateComposeModal());
  },
  downloadDefaultFile() {
    if (window.navigator.platform.indexOf('Win') >-1) {

    } else {
      DownloadByUrl.downloadFile('https://raw.githubusercontent.com/reportportal/reportportal/master/docker-compose.yml');
    }
  },
  copyText(e) {
    const $temp = $('<input>');
    $('body').append($temp);
    let copyVal = $(e.target).attr('data-copy');
    $temp.val(copyVal).select();
    $temp.remove();
    document.execCommand('copy');
  },
  checkScroll(scrollTop, scrollElTop) {
    if (scrollElTop < 1300) {
      this.$el.addClass('animate');
      return true;
    }
    return false;
  },
});
