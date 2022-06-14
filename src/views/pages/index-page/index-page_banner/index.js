import { $ } from 'backbone';
import template from './index-page_banner.jade';
import IndexPageSection from '../../sectionView';
import './index-page_banner.scss';

export default IndexPageSection.extend({
  template,
  className: 'index-page_banner',
  events: {
    'click .close': 'onClose',
  },
  initialize() {
    this.renderTemplate();
  },
  onClose() {
    $('.index-page_banner').remove();
  },
});
