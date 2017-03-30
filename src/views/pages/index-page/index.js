import _ from 'underscore';
import { $ } from 'backbone';
import Epoxy from 'backbone.epoxy';
import template from './index-page.jade';
import './index-page.scss';

import IndexPageWelcome from './index-page_welcome';
import IndexPageFeatures from './index-page_features';
import IndexPageHowWorks from './index-page_how-works';
import IndexPageSpecification from './index-page_specification';

export default Epoxy.View.extend({
  template,
  className: 'index-page',
  events: {
    'click [data-js-about-page]': 'onClickAbout',
  },
  initialize() {
    this.renderTemplate();
    this.sections = [];
    const listViews = [IndexPageWelcome, IndexPageFeatures, IndexPageHowWorks,
      IndexPageSpecification];
    _.each(listViews, (constructor) => {
      const view = new constructor();
      this.sections.push(view);
      $('[data-js-sections-container]', this.$el).append(view.$el);
    });
  },
  onDestroy() {
    _.each(this.sections, view => view.destroy);
  },
});
