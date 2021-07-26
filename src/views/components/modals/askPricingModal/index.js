import Router from 'router';
import { $ } from 'backbone';
import Epoxy from 'backbone.epoxy';
import 'selectize';
import BaronScroll from 'utils/baronScroll';
import template from './AskPricingModal.jade';
import './AskPricingModal.scss';
import SubscribeModal from '../subscribeModal';


export default Epoxy.View.extend({
  template,
  className: 'ask-pricing-modal',
  events: {
    'click .baron_scroller': 'onClickBackdrop',
    'click [data-js-cancel]': 'onCancel',
    'click [data-js-content]': 'onClickContent',
    'click [data-js-send]': 'onClickSend',
    'click [data-js-email]': 'onClickEmail',
    'click [data-js-company]': 'onClickCompany',
  },
  initialize() {
    this.renderTemplate();
    $(window).on('resize.askPricingModal', () => {
      this.resize();
    });
  },
  isEmail(email) {
    const regex = /^[a-z0-9.+_-]+@[a-z0-9_.-]+?\.[a-z0-9]{2,}$/i;
    return regex.test(email);
  },
  validateEmail(value) {
    const emailSpan = $('#email-error');
    const button = $('#send-btn');
    if (!this.isEmail(value)) {
      emailSpan.addClass('show');
      button.attr('disabled', 'disabled');
      return;
    }
    emailSpan.removeClass('show');
    this.unlockButton();
  },

  validateCompany(value) {
    const companySpan = $('#company-error');
    const button = $('#send-btn');
    if (value === '') {
      companySpan.addClass('show');
      button.attr('disabled', 'disabled');
      return;
    }
    companySpan.removeClass('show');
    this.unlockButton();
  },

  onClickEmail() {
    const emailInput = $('#email');
    emailInput.on('input', () => {
      this.validateEmail(emailInput.val());
    });
  },

  onClickCompany() {
    const companyInput = $('#company');
    companyInput.on('input', () => {
      this.validateCompany(companyInput.val());
    });
  },
  unlockButton() {
    const emailInput = $('#email')[0];
    const companyInput = $('#company')[0];
    const button = $('#send-btn');
    if (this.isEmail(emailInput.value) && companyInput.value !== '') {
      button.removeAttr('disabled');
    }
  },
  onShow() {
    this.$el.width();
    this.$el.addClass('show');
    this.resize();
    BaronScroll($('[data-js-content]', this.$el));
  },
  resize() {
    if ($(document).width() <= 767) {
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
  onClickSend(e) {
    this.hide();
    e.preventDefault();
    Router.modals.show(new SubscribeModal());
  },
  onDestroy() {
    $(window).off('resize.askPricingModal');
    $('#email').off('input');
    $('#company').off('input');
  },
});
