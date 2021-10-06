import Router from 'router';
import { $ } from 'backbone';
import Epoxy from 'backbone.epoxy';
import BaronScroll from 'utils/baronScroll';
import template from './AskServiceModal.jade';
import './AskServiceModal.scss';
import SubscribeModal from '../subscribeModal';

export default Epoxy.View.extend({
  template,
  className: 'ask-service-modal',
  events: {
    'click .baron_scroller': 'onClickBackdrop',
    'click [data-js-cancel]': 'onCancel',
    'click [data-js-content]': 'onClickContent',
    'submit [data-js-leadForm]': 'onSubmit',
  },
  initialize() {
    this.renderTemplate();
    this.initInputListeners();
    this.createDummyElements();
  },

  initInputListeners() {
    this.fieldsConfig = [
      {
        inputSelector: '#email',
        hintSelector: '#email-error',
        validator: this.isEmail,
      },
      {
        inputSelector: '#company',
        hintSelector: '#company-error',
        validator: this.isNotEmpty,
      },
      {
        inputSelector: '#first_name',
        hintSelector: '#first_name-error',
        validator: this.isNotEmpty,
      },
      {
        inputSelector: '#last_name',
        hintSelector: '#last_name-error',
        validator: this.isNotEmpty,
      },
    ];

    this.fieldsConfig.forEach((fieldConf) => {
      const field = $(fieldConf.inputSelector, this.$el);

      field.on('input', () => {
        this.validate(field.val(), fieldConf.hintSelector, fieldConf.validator);
      });
    });
  },

  createDummyElements() {
    const iframe = document.createElement('iframe');
    iframe.name = 'dummyframe';
    iframe.id = 'dummyframe';
    iframe.style= 'display: none;';
    document.body.appendChild(iframe);

    this.iframe = iframe;
  },

  removeDummyElements() {
    this.iframe.parentNode.removeChild(this.iframe);
  },

  isEmail(email) {
    const regex = /^[a-z0-9.+_-]+@[a-z0-9_.-]+?\.[a-z0-9]{2,}$/i;
    return regex.test(email);
  },
  isNotEmpty(value) {
    return value !== '';
  },

  validate(value, hintSelector, validator) {
    const errorHint = $(hintSelector);
    const sendBtn = $('#send-btn');
    if (validator(value)) {
      errorHint.removeClass('show');
      this.unlockButton();
    } else {
      errorHint.addClass('show');
      sendBtn.attr('disabled', true);
    }
  },

  unlockButton() {
    const sendBtn = $('#send-btn');
    const isValid = this.fieldsConfig.every((fieldConf) => {
      const field = $(fieldConf.inputSelector, this.$el)[0];

      return fieldConf.validator(field.value);
    });

    if (isValid) {
      sendBtn.removeAttr('disabled');
    }
  },
  onShow() {
    this.$el.width();
    this.$el.addClass('show');
    BaronScroll($('[data-js-content]', this.$el));
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

  onSubmit() {
    $('.loader', this.$el).addClass('show');
    this.iframe.onload = () => this.nextAction();
    this.iframe.onerror = () => this.nextAction();
  },

  nextAction() {
    this.hide();
    Router.modals.show(new SubscribeModal());
  },
  onDestroy() {
    this.fieldsConfig.forEach((fieldConf) => {
      const field = $(fieldConf.inputSelector, this.$el);

      field.off('input');
    });
    this.removeDummyElements();
  },
});
