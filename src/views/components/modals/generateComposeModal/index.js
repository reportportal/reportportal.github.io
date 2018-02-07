import { $ } from 'backbone';
import axios from 'axios';
import YAML from 'js-yaml';
import Epoxy from 'backbone.epoxy';
import FileSaver from 'file-saver';
import BaronScroll from 'utils/baronScroll';
import template from './GenerateComposeModal.jade';
import './GenerateComposeModal.scss';

export default Epoxy.View.extend({
  template,
  className: 'generate-modal',
  events: {
    'click .baron_scroller': 'onClickBackdrop',
    'click [data-js-cancel]': 'onCancel',
    'click [data-js-content]': 'onClickContent',
    'click [data-js-slider]': 'onClickSlider',
    'click [data-js-generate]': 'generateComposeFile',
  },
  initialize() {
    this.renderTemplate();
    $(window).on('resize.generateModal', () => {
      this.resize();
    });
  },
  onShow() {
    this.$el.width();
    this.$el.addClass('show');
    this.resize();
    BaronScroll($('[data-js-content]', this.$el));
    this.customizeSelect();
  },
  generateComposeFile() {
    axios.get('https://raw.githubusercontent.com/reportportal/reportportal/4.0/docker-compose.yml')
      .then((response) => {
        let compose = YAML.load(response.data);
        let os;
        if (window.navigator.platform.indexOf('Win') > -1) {
          os = 'win';
        } else {
          os = 'mac';
        }
        console.log(compose);
        compose = this.mongo(compose, os);
        compose = this.folderLocation(compose, os);
        compose = this.sessionLive(compose);
        compose = this.bts(compose);
        compose = this.gateway(compose);
        compose = this.analayzer(compose);
        const blob = new Blob([YAML.dump(compose)], { type: 'text/plain;charset=utf-8' });
        FileSaver.saveAs(blob, 'docker-compose.yml');
        this.hide();
      });
  },
  createMongoURI() {
    const dbhost = $('[data-js-db-host]', this.$el).val() || 'localhost';
    const dbName = $('[data-js-db-name]', this.$el).val() || 'reportportal';
    const dbPort = $('[data-js-db-port]', this.$el).val() || 27017;
    const dbAuth = $('[data-js-db-auth-name]', this.$el).val() || 'reportportal';
    const dbPassword = $('[data-js-db-password]', this.$el).val();
    const dbUser = $('[data-js-db-user]', this.$el).val();
    let auth = '';
    if (dbPassword && dbUser) {
      auth = `${dbUser}:${dbPassword}@`;
    }
    return `mongodb://${auth}${dbhost}:${dbPort}/${dbName}?authSource=${dbAuth}`;
  },
  mongo(compose, os) {
    const isLocal = $('.db-settings', this.$el).hasClass('hide');
    if (isLocal) {
      if (os === 'win') {
        delete compose.services.mongodb.volumes;
      }
    } else {
      delete compose.services.mongodb.restart;
      delete compose.services.mongodb.volumes;
      delete compose.services.mongodb.restart;
      const mongoURI = `RP_MONGO_URI=${this.createMongoURI()}`;
      compose.services.uat.environment.push(mongoURI);
      compose.services.api.environment.push(mongoURI);
      compose.services.jira.environment.push(mongoURI);
      compose.services.rally.environment.push(mongoURI);
    }
    return compose;
  },
  folderLocation(compose) {
    const mongodb = compose.services.mongodb;
    const loc = $('[data-js-folder-location]', this.$el).val() || './';
    if (mongodb.volumes) {
      compose.services.mongodb.volumes[0] = mongodb.volumes[0].replace('./data/mongo', loc);
    }
    compose.services.registry.volumes[0] = compose.services.registry.volumes[0].replace('./data/consul', loc);
    compose.services.elasticsearch.volumes[0] = compose.services.elasticsearch.volumes[0].replace('./data/elasticsearch', loc);
    return compose;
  },
  sessionLive(compose) {
    const time = $('[data-js-session]', this.$el).val() || 86400;
    compose.services.uat.environment[1] = `RP_SESSION_LIVE=${time}`;
    return compose;
  },
  bts(compose) {
    const rally = $('[data-js-rally]', this.$el).is(':checked');
    const jira = $('[data-js-jira]', this.$el).is(':checked');
    if (!rally) {
      delete compose.services.rally;
    }
    if (!jira) {
      delete compose.services.jira;
    }
    return compose;
  },
  gateway(compose) {
    const fabio = $('[data-js-fabio]', this.$el).is(':checked');
    const traefic = {
      image: 'traefik:1.5',
      ports: [
        '8080:8080',
        '8081:8081',
      ],
      command: [
        '--consulcatalog.endpoint=registry:8500',
        '--defaultEntryPoints=http',
        '--entryPoints=Name:http Address::8080',
        '--logLevel=DEBUG',
        '--web',
        '--web.address=:8081',
      ],
      restart: 'always',
    };
    if (!fabio) {
      compose.services.gateway = traefic;
    }
    return compose;
  },
  analayzer(compose) {
    const analyzer = $('[data-js-analayzer]', this.$el).is(':checked');
    if (!analyzer) {
      delete compose.services.analyzer;
      delete compose.services.elasticsearch;
    }
    return compose;
  },
  onClickSlider(e) {
    const el = $('#analayzer');
    if (el.is(':checked')) {
      el.removeAttr('checked');
      $(e.target).text('OFF');
    } else {
      el.attr('checked', true);
      $(e.target).text('ON');
    }
  },
  customizeSelect() {
    const select = $('#custom-select');
    $('#custom-select').each(() => {
      const $this = select;
      const numberOfOptions = select.children('option').length;

      $this.addClass('select-hidden');
      $this.wrap('<div class="select"></div>');
      $this.after('<div class="select-styled"></div>');

      const $styledSelect = $this.next('div.select-styled');
      $styledSelect.text($this.children('option').eq(0).text());

      const $list = $('<ul />', {
        class: 'select-options',
      }).insertAfter($styledSelect);

      for (let i = 0; i < numberOfOptions; i += 1) {
        $('<li />', {
          text: $this.children('option').eq(i).text(),
          rel: $this.children('option').eq(i).val(),
        }).appendTo($list);
      }

      const $listItems = $list.children('li');

      $styledSelect.click(function (e) {
        e.stopPropagation();
        $('div.select-styled.active').not(this).each(function () {
          $(this).removeClass('active').next('ul.select-options').hide();
        });
        $(this).toggleClass('active').next('ul.select-options').toggle();
      });

      $listItems.click(function (e) {
        e.stopPropagation();
        $styledSelect.text($(this).text()).removeClass('active');
        $this.val($(this).attr('rel'));
        $list.hide();
        if ($this.val() === 'separate') {
          $('.db-settings').removeClass('hide');
        } else {
          $('.db-settings').addClass('hide');
        }
      });

      $(document).click(() => {
        $styledSelect.removeClass('active');
        $list.hide();
      });
    });
  },
  resize() {
    if ($(document).width() <= 991) {
      this.destroy();
    }
  },
  hide() {
    this.$el.removeClass('show');
    setTimeout(() => {
      this.destroy();
    }, 320);
  },
  onClickContent(e) {
    e.stopPropagation();
  },
  onClickBackdrop() {
    this.hide();
  },
  onCancel() {
    this.hide();
  },
  onDestroy() {
    $(window).off('resize.generateModal');
  },
});
