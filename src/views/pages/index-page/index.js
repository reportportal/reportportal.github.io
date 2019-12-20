import _ from 'underscore';
import { $ } from 'backbone';
import Epoxy from 'backbone.epoxy';
import template from './index-page.jade';
import './index-page.scss';

import IndexPageWelcome from './index-page_welcome';
import IndexPageFeatures from './index-page_features';
import IndexPageHowWorks from './index-page_how-works';
import IndexPageSpecification from './index-page_specification';
import IndexPageGitHubFork from './index-page_github-fork';
import IndexPageStartWith from './index-page_start-with';
import IndexPageTwitter from './index-page_twitter';
import IndexPageNewRelease from './index-page_new-release';

import Footer from 'components/footer';

export default Epoxy.View.extend({
  template,
  className: 'index-page',
  events: {
    'click [data-js-about-page]': 'onClickAbout',
  },
  initialize(options) {
    this.mainScrollEl = options.mainScrollEl;
    this.renderTemplate();
    this.sections = [];
    const listViews = [IndexPageWelcome, IndexPageNewRelease, IndexPageFeatures, IndexPageHowWorks,
      IndexPageSpecification, IndexPageGitHubFork, IndexPageStartWith, IndexPageTwitter];
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
      .off('scroll.indexPage')
      .on('scroll.indexPage', () => {
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
    this.mainScrollEl.off('scroll.indexPage');
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
