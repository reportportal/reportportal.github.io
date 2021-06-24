import { $ } from 'backbone';
import Epoxy from 'backbone.epoxy';
import 'selectize';
import BaronScroll from 'utils/baronScroll';
import template from './AskPricingModal.jade';
import './AskPricingModal.scss';


export default Epoxy.View.extend({
  template,
  className: 'ask-pricing-modal',
  events: {
    'click .baron_scroller': 'onClickBackdrop',
    'click [data-js-cancel]': 'onCancel',
    'click [data-js-content]': 'onClickContent',
    'click [data-js-send]': 'onClickSend',
    'blur [data-js-email]': 'validation',
    'blur [data-js-company]': 'validation',
  },
  initialize() {
    this.renderTemplate();
    $(window).on('resize.askPricingModal', () => {
      this.resize();
    });
  },
  validation() {
    const sendBtn = $('.send-btn');
    const emailInput = $('#email')[0];
    const companyInput = $('#company')[0];
    const emailSpan = $('#email-error');
    const companySpan = $('#company-error');

    !this.isEmail(emailInput.value) ? emailSpan.addClass('show') : emailSpan.removeClass('show');
    companyInput.value === '' ? companySpan.addClass('show') : companySpan.removeClass('show');
    if (this.isEmail(emailInput.value) && companyInput.value !== '') {
      sendBtn.removeAttr('disabled');
    }
  },
  isEmail(email) {
    const regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
  },
  onShow() {
    this.$el.width();
    this.$el.addClass('show');
    this.resize();
    BaronScroll($('[data-js-content]', this.$el));
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
  onClickSend() {
    this.hide();
  },
  onDestroy() {
    $(window).off('resize.askPricingModal');
  },
});
