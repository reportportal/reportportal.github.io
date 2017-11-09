import IndexPageSection from '../../sectionView';
import template from './index-page_twitter.jade';
import './index-page_twitter.scss';
import './index-page_twitter__animate.scss';
import $ from '../../../../lib/jquery.min';
import _ from '../../../../lib/underscore';

export default IndexPageSection.extend({
  template,
  className: 'index-page_twitter',
  events: {
    'click [data-js-twitter-button]': 'onClickTwitter',
  },
  initialize() {
    this.renderTemplate();
    const self = this;
    $.ajax({
      url: '//status.reportportal.io/twitter?count=6',
      dataType: 'jsonp',
      jsonp: 'jsonp',
      crossDomain: true,
      async: true,
    })
      .done((data) => {
        _.each(data, (item, i) => {
          $('.twit-list').append(`<li><p>${self.pasteInTemplate(data[i].text, data[i].entities)}</p></li>`);
        });
      });
  },
  pasteInTemplate(text, entities) {
    const replaceObjects = [];
    let result = '';
    let currentReplaceObject;
    function parseEntitie(curEntities, getHtml) {
      _.each(curEntities, (entity) => {
        if (entity.indices[0] !== entity.indices[1]) {
          replaceObjects.push({
            start: entity.indices[0],
            end: entity.indices[1],
            html: getHtml(entity),
          });
        }
      });
    }
    parseEntitie(entities.urls, entity => `<a data-js-social-link target="_blank" href="${entity.url}">${entity.display_url}</a>`);
    parseEntitie(entities.user_mentions, entity => `<a data-js-social-link target="_blank" href="https://twitter.com/intent/user?user_id=${entity.id}">@${entity.screen_name}</a>`);
    parseEntitie(entities.hashtags, entity => `<a data-js-social-link target="_blank" href="https://twitter.com/hashtag/${entity.text}">#${entity.text}</a>`);
    parseEntitie(entities.media, entity => `<a data-js-social-link target="_blank" href="${entity.url}">${entity.display_url}</a>`);
    replaceObjects.sort((a, b) => a.start - b.start);
    currentReplaceObject = replaceObjects.shift();
    _.each(text, (letter, index) => {
      if (!currentReplaceObject && replaceObjects.length) {
        currentReplaceObject = replaceObjects.shift();
      }
      if (!currentReplaceObject || index < currentReplaceObject.start) {
        result += letter;
        return true;
      }
      if (currentReplaceObject.start === index) {
        result += currentReplaceObject.html;
        return true;
      }
      if (index >= currentReplaceObject.end) {
        result += letter;
        currentReplaceObject = null;
      }
      return true;
    });
    return result.replace(/\n/g, '<br>');
  },
  getSections() {
    return [
      { checkScroll: this.checkScroll.bind(this), el: this.el },
    ];
  },
  onClickTwitter() {
    window.open('http://twitter.com/ReportPortal_io');
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
