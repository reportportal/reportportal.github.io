import IndexPageSection from '../_indexPageSection';
import template from './index-page_welcome.jade';
import './index-page_welcome.scss';

export default IndexPageSection.extend({
  template,
  className: 'index-page_welcome',
  events: {

  },
  initialize() {
    this.renderTemplate();
  },
});
