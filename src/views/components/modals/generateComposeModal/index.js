import { $ } from 'backbone';
import Epoxy from 'backbone.epoxy';
import FileSaver from 'file-saver';
import YAML from 'json2yaml';
import BaronScroll from 'utils/baronScroll';
import template from './GenerateComposeModal.jade';
import './GenerateComposeModal.scss';
import ComposeMac from './composes/docker-compose.yml';
import ComposeWin from './composes/docker-compose-win.yml';


export default Epoxy.View.extend({
  template,
  className: 'generate-modal',

  events: {
    'click .baron_scroller': 'onClickBackdrop',
    'click [data-js-cancel]': 'onCancel',
    'click [data-js-content]': 'onClickContent',
    'click [data-js-slider]': 'onClickSlider',
    'keypress [data-js-session]': 'validation',
  },
  initialize() {
    this.renderTemplate();
    $(window).on('resize.generateModal', () => {
      this.resize();
    });
  },
  onShow() {
    this.$el.width(); // for rerender
    this.$el.addClass('show');
    this.resize();
    BaronScroll($('[data-js-content]', this.$el));
    this.customizeSelect();
  },
  validation(e) {
    function getChar(event) {
      if (event.which == null) {
        if (event.keyCode < 32) return null;
        return String.fromCharCode(event.keyCode);
      }
      if (event.which != 0 && event.charCode != 0) {
        if (event.which < 32) return null;
        return String.fromCharCode(event.which);
      }
      return null;
    }
    e = e || event;
    if (e.ctrlKey || e.altKey || e.metaKey) return;
    const chr = getChar(e);
    if (chr == null) return;
    if (chr < '0' || chr > '9') {
      return false;
    }
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
    $('#custom-select').each(function () {
      let $this = $(this),
        numberOfOptions = $(this).children('option').length;

      $this.addClass('select-hidden');
      $this.wrap('<div class="select"></div>');
      $this.after('<div class="select-styled"></div>');

      const $styledSelect = $this.next('div.select-styled');
      $styledSelect.text($this.children('option').eq(0).text());

      const $list = $('<ul />', {
        class: 'select-options',
      }).insertAfter($styledSelect);

      for (let i = 0; i < numberOfOptions; i++) {
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
        if ($this.val() == 'separate') {
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
