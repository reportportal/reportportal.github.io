import axios from 'axios';
import FileSaver from 'file-saver';
import YAML from 'js-yaml';
import { $ } from 'backbone';
import Router from 'router';
import IndexPageSection from '../../sectionView';
import GenerateComposeModal from 'components/modals/generateComposeModal';
import template from './download-page_configure.jade';
import './download-page_configure.scss';
import './download-page_configure__animate.scss';

export default IndexPageSection.extend({
  template,
  className: 'download-page_config',
  events: {
    'click [data-copy]': 'copyText',
    'click [data-js-configure-file]': 'configureFile',
    'click [data-js-download-default]': 'downloadDefaultFile',
  },
  initialize() {
    this.renderTemplate();
  },
  getSections() {
    return [
      { checkScroll: this.checkScroll.bind(this), el: this.el },
    ];
  },
  configureFile() {
    Router.modals.show(new GenerateComposeModal());
  },
  downloadDefaultFile() {
    axios.get('https://raw.githubusercontent.com/reportportal/reportportal/master/docker-compose.yml')
      .then((response) => {
        const compose = YAML.load(response.data);
        if (window.navigator.platform.indexOf('Win') > -1) {
          delete compose.services.mongodb.volumes;
        }
        const blob = new Blob([YAML.dump(compose)], { type: 'text/plain;charset=utf-8' });
        FileSaver.saveAs(blob, 'docker-compose.yml');
      });
  },
  copyText(e) {
    const $temp = $('<input>');
    $('body').append($temp);
    const copyVal = $(e.target).attr('data-copy');
    $temp.val(copyVal).select();
    document.execCommand('copy');
    $temp.remove();
    $('[data-copy]', this.$el).text('Copied');
    setTimeout(() => {
      $('[data-copy]', this.$el).text('Copy');
    }, 1000);
  },
  checkScroll(scrollTop, scrollElTop) {
    if (scrollElTop < 1300) {
      this.$el.addClass('animate');
      return true;
    }
    return false;
  },
});
