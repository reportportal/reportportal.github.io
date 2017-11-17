import IndexPageSection from '../../sectionView';
import template from './index-page_start-with.jade';
import './index-page_start-with.scss';
import './index-page_start-with__animate.scss';
import { $ } from 'backbone';
import _ from 'underscore';
import SwipeGallery from './SwipeGallery';
import { parse } from 'iso8601-duration';

export default IndexPageSection.extend({
  template,
  className: 'index-page_start-with',
  events: {
    'click [data-js-next]': 'onClickNext',
    'click [data-js-prev]': 'onClickPrev',
  },
  initialize() {
    this.renderTemplate();
    $.ajax({
      url: '//status.reportportal.io/youtube?count=7',
      dataType: 'jsonp',
      jsonp: 'jsonp',
      crossDomain: true,
      async: true,
    })
      .done((data) => {
        _.each(data, (item, i) => {
          const text = this.calcTitle(item.title);
          const duration = this.calcDuration(item.duration);
          const el = `
            <div class="carousel-item">
                <div class="hider">
                    <img src="${item.thumbnail}"/>
                    <span>${duration}</span>
                </div>
                <a target="_blank" href="https://www.youtube.com/watch?v=${item.id}">${text}</a>
            </div>`;
          if (i < 4) {
            $('[data-js-left]').append(el);
          } else {
            $('[data-js-right]').append(el);
          }
        });
        $('[data-js-right]').append(`
            <div class="carousel-item more-link">
                <div>
                    <a target="_blank" href="http://youtube.com/c/ReportPortalCommunity">More videos</a>
                </div>
            </div>`);
        this.gallery = new SwipeGallery({ selector: $('.slider-container') });
      });
  },
  onClickNext() {
    this.gallery.next();
  },
  onClickPrev() {
    this.gallery.prev();
  },
  calcDuration(timeStr) {
    const duration = parse(timeStr);
    return `${duration.hours}:${duration.minutes}:${duration.seconds}`;
  },
  calcTitle(text) {
    const size = 70;
    let lastSpase;
    if (text.length > size) {
      text = text.slice(0, size);
      lastSpase = text.lastIndexOf(' ');
      text = text.slice(0, lastSpase);
      text = `${text}...`;
    }
    return text;
  },
  getSections() {
    return [
      { checkScroll: this.checkScroll.bind(this), el: this.el },
    ];
  },
  checkScroll(scrollTop, scrollElTop) {
    if (scrollElTop > 150) {
      this.$el.addClass('animate');
    }
    if (scrollElTop > 350) {
      this.$el.addClass('animate-items');
      return true;
    }
    return false;
  },
});
