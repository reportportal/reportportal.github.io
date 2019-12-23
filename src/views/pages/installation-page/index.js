import _ from 'underscore';
import { $ } from 'backbone';
import Epoxy from 'backbone.epoxy';
import template from './installation-page.jade';
import './installation-page.scss';

import InstallationPageInstall from './installation-page_install';
import InstallationPageConfig from './installation-page_configure';
import InstallationPageOpen from './installation-page_open';
import InstallationPageIntegrate from './installation-page_integrate';

import Footer from 'components/footer';

export default Epoxy.View.extend({
  template,
  className: 'installation-page',
  events: {
    'click [data-js-to]': 'scrollTo',
  },
  initialize(options) {
    this.mainScrollEl = options.mainScrollEl;
    this.isScroll = options.isScroll;
    this.renderTemplate();
    this.sections = [];
    const listViews = [InstallationPageInstall, InstallationPageConfig,
      InstallationPageOpen, InstallationPageIntegrate];
    _.each(listViews, (constructor) => {
      const view = new constructor();
      this.sections.push(view);
      $('[data-js-sections-container]', this.$el).append(view.$el);
    });
    this.footer = new Footer();
    $('[data-js-footer-container]', this.$el).html(this.footer.$el);
    $(window).on('resize', () => {
      if ($(document).width() <= 768) {
        $('[data-js-controls]').removeClass('fixed-controls');
      }
    });
  },
  onShow() {
    this.scrollerAnimate = new ScrollerAnimate(this.sections);
    this.mainScrollEl
      .off('scroll.indexPage')
      .on('scroll.indexPage', () => {
        this.onScroll();
      });
    this.onScroll();
    this.isScroll && this.scrollToIntegraton();
  },
  scrollToIntegraton() {
    const scrollTop = this.mainScrollEl.scrollTop();
    const section = $('[data-js-integrate]', this.$el).offset().top;
    const menuHeight = 55;
    const bannerHeight = $('.install-header').outerHeight();
    const controlsHeight = $('.controls').outerHeight();
    if ($(document).width() >= 768) {
      this.mainScrollEl.animate({ scrollTop: (scrollTop + section)
        - menuHeight - bannerHeight - controlsHeight }, 500);
    } else {
      this.mainScrollEl.animate({ scrollTop: (scrollTop + section) - menuHeight }, 500);
    }
  },

  scrollTo(e) {
    const sectionData = $(e.target).attr('type');
    const scrollTop = this.mainScrollEl.scrollTop();
    const section = $(`[${sectionData}]`).offset().top;
    const menuHeight = 55;
    const bannerHeight = $('.install-header').outerHeight();
    const controlsHeight = $('.controls').outerHeight();

    if (scrollTop > 140) {
      if (sectionData === 'data-js-install') {
        this.mainScrollEl.animate({ scrollTop: (scrollTop + section)
        - controlsHeight - bannerHeight }, 500);
        return;
      }
      this.mainScrollEl.animate({ scrollTop: (scrollTop + section)
      - menuHeight - controlsHeight }, 500);
    } else if ($(document).width() >= 768) {
      this.mainScrollEl.animate({ scrollTop: (scrollTop + section)
      - menuHeight - bannerHeight - controlsHeight }, 500);
    } else {
      this.mainScrollEl.animate({ scrollTop: (scrollTop + section) - menuHeight }, 500);
    }
  },
  onScroll() {
    const scrollTop = this.mainScrollEl.scrollTop();
    this.fixControls(scrollTop);
    this.checkCurrentStep(scrollTop);
    this.scrollerAnimate.activateScroll(scrollTop);
  },
  checkCurrentStep(scrollTop) {
    $('.controls .steps li').removeClass('active');
    const section1 = $('[data-js-install]').outerHeight(true);
    const section2 = $('[data-js-configure]').outerHeight(true) + section1;
    const section3 = $('[data-js-open]').outerHeight(true) + section2;
    if (scrollTop >= 0 && scrollTop <= section1) {
      $('[data-js-install-cntr]').addClass('active');
    } else if (scrollTop <= section2) {
      $('[data-js-config-cntr]').addClass('active');
    } else if (scrollTop <= section3) {
      $('[data-js-open-cntr]').addClass('active');
    } else if (scrollTop > section3) {
      $('[data-js-integrate-cntr]').addClass('active');
    }
  },
  fixControls(scrollTop) {
    if ($(document).width() >= 768) {
      if (scrollTop >= 140) {
        $('[data-js-controls]').addClass('fixed-controls');
      } else {
        $('[data-js-controls]').removeClass('fixed-controls');
      }
    }
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
