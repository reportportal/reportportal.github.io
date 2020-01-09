import _ from 'underscore';
import { $ } from 'backbone';
import Epoxy from 'backbone.epoxy';
import template from './community-page.jade';

import CommunityStatistics from './community_statistics';
import CommunityStart from './community_start-with';

import Footer from 'components/footer';

export default Epoxy.View.extend({
  template,
  className: 'community-page',
  initialize(options) {
    this.mainScrollEl = options.mainScrollEl;
    this.renderTemplate();
    this.sections = [];
    const listViews = [CommunityStatistics, CommunityStart];
    _.each(listViews, (constructor) => {
      const view = new constructor();
      this.sections.push(view);
      $('[data-js-sections-container]', this.$el).append(view.$el);
    });
    this.footer = new Footer();
    $('[data-js-footer-container]', this.$el).html(this.footer.$el);
  },
  onShow() {
    this.scrollerAnimate = new ScrollerAnimate(this.sections);
    this.mainScrollEl
      .off('scroll.communityPage')
      .on('scroll.communityPage', () => {
        this.onScroll();
      });
    this.onScroll();
  },
  onScroll() {
    const scrollTop = this.mainScrollEl.scrollTop();
    this.scrollerAnimate.activateScroll(scrollTop);
  },
  onDestroy() {
    _.each(this.sections, view => view.destroy);
    this.footer.destroy();
    this.mainScrollEl.off('scroll.communityPage');
  },
});

function ScrollerAnimate(blocks) {
  this.blocks = blocks;
  this.scrollMap = [];
  this.documentHeight = 0;

  this.createScrollMap = () => {
    this.scrollMap = [];
    this.documentHeight = document.documentElement.clientHeight;
    _.each(this.blocks, (element) => {
      _.each(element.getSections(), (section) => {
        this.scrollMap.push({
          scrollStart: section.el.offsetTop,
          scrollEnd: section.el.offsetTop + section.el.offsetHeight,
          checkScroll: section.checkScroll,
          activate: false,
        });
      });
    });
  };

  this.activateScroll = (scrollTop) => {
    const scrollBottom = scrollTop + this.documentHeight;
    const showBlockIndexes = [];
    _.each(this.scrollMap, (element, index) => {
      if ((element.scrollStart <= scrollBottom && scrollTop < element.scrollStart)
        || (element.scrollEnd <= scrollBottom && scrollTop < element.scrollEnd)
        || (element.scrollEnd > scrollBottom && scrollTop >= element.scrollStart)) {
        showBlockIndexes.push(index);
        if (!element.activate) {
          const result = element.checkScroll(scrollTop, scrollBottom - element.scrollStart,
            element.scrollStart);
          if (result) {
            element.activate = true;
          }
        }
      }
    });
    // return middle block index
    if (showBlockIndexes.length !== 2) {
      return showBlockIndexes[parseInt(showBlockIndexes.length / 2, 10)];
    }
    const middleScreen = scrollBottom - (this.documentHeight / 2);
    const blockSeparate = this.scrollMap[showBlockIndexes[0]].scrollEnd;
    if (blockSeparate > middleScreen) return showBlockIndexes[0];
    return showBlockIndexes[1];
  };

  this.resize = (scrollTop) => {
    this.createScrollMap();
    this.activateScroll(scrollTop);
  };

  this.createScrollMap();
}

