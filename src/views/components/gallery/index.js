/**
 * Created by Yana_Zaitsava on 11/27/2017.
 */
import _ from 'underscore';
import { $ } from 'backbone';
import Epoxy from 'backbone.epoxy';
import SwipeGallery from './SwipeGallery';
import { parse } from 'iso8601-duration';
import template from './Gallery.jade';
import './Gallery.scss';

export default Epoxy.View.extend({
  template,
  className: 'slider-container',
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
                <a target="_blank" href="https://www.youtube.com/watch?v=${item.id}">
                    <div class="hider">
                        <img src="${item.thumbnail}"/>
                        <span>${duration}</span>
                    </div>
                   ${text}
                </a>
            </div>`;
          if (i < 4) {
            $('[data-js-left]').append(el);
          } else {
            $('[data-js-right]').append(el);
          }
        });
        $('[data-js-right]').append(`
            <div class="carousel-item more-link">
                <a target="_blank" href="http://youtube.com/c/ReportPortalCommunity">
                    <div>More videos</div>
                </a>
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
    if (duration.hours === 0) {
      return `${duration.minutes}:${duration.seconds}`;
    }
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
});
