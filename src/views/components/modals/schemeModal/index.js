import { $ } from 'backbone';
import Epoxy from 'backbone.epoxy';
import template from './SchemeModal.jade';
import './SchemeModal.scss';
import Tooltip from 'components/tooltip';
import BaronScroll from 'utils/baronScroll';
import info from './httpInfo.js';

export default Epoxy.View.extend({
  template,
  className: 'preview-modal',

  events: {
    'click .baron_scroller': 'onClickBackdrop',
    'click [data-js-content]': 'onClickContent',
    'mouseenter [data-js-info]': 'onHoverInfo',
    'mouseleave [data-js-info]': 'onLeaveInfo'
  },

  initialize() {
    this.renderTemplate();
    $(window).on('resize.schemeModal', () => {
      this.resize();
    });
  },
  onHoverInfo(e) {
    let el;
    if($(e.target).attr('type')){
      el=$(e.target);
    } else{
      el = $(e.target).parent();
    }
    let key = el.attr('type');
    this.httpInfo = new Tooltip(info[key]);
    el.append(this.httpInfo.$el);
  },
  onLeaveInfo(){
    this.httpInfo.destroy();
  },
  onShow() {
    this.$el.width(); // for rerender
    this.$el.addClass('show');
    this.resize();
    BaronScroll($('[data-js-content]', this.$el));
  },
  resize() {
    if($(document).width() <= 991){
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
  onDestroy() {
    $(window).off('resize.previewModal');
  },
});
