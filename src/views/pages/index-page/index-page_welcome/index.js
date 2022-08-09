import { $ } from 'backbone';
import Router from 'router';
import PreviewModal from 'components/modals/previewModal';
import IndexPageSection from '../../sectionView';
import template from './index-page_welcome.jade';
import './index-page_welcome.scss';
import './index-page_welcome__animate.scss';
import Site1 from './img/site1.png';
import Site2 from './img/site2.png';
import Site3 from './img/site3.png';
import Site4 from './img/site4.png';
import { AskForServiceButtonWrappered } from 'react-components/buttons/ask-for-service-button/askForServiceButton.jsx';
import renderReactComponent from 'utils/backboneReactRender';

const images = [Site1, Site2, Site3, Site4];

export default IndexPageSection.extend({
  template,
  className: 'index-page_welcome',
  events: {
    'click .video-preview': 'onClickPreview',
  },
  initialize() {
    this.renderTemplate();
    this.bg1 = $('[data-js-wave-1]', this.$el);
    this.bg2 = $('[data-js-wave-2]', this.$el);
    this.bg3 = $('[data-js-wave-3]', this.$el);
    $('.site', this.$el).attr('src', this.getRandomElement(images));

    const askForServiceButton = $('.ask-for-service-button', this.$el);
    renderReactComponent(
      askForServiceButton,
      AskForServiceButtonWrappered,
      {
        options: [
          { name: 'ReportPortalSource__c', value: 'Landing page/ ask for service body' },
          { name: 'lead_source', value: 'RP_Landing' },
        ]
      },
    );
  },
  getSections() {
    return [
      { checkScroll: this.checkScroll.bind(this), el: this.el },
    ];
  },
  checkScroll(scrollTop, scrollElTop, scrollStart) {
    if (scrollElTop < 1300) {
      this.$el.addClass('animate');
    }
    const scrollEl = scrollTop - scrollStart;
    this.bg1.css({ transform: `translate(0, -${scrollEl / 4}px)` });
    this.bg2.css({ transform: `translate(0, -${scrollEl / 8}px)` });
    this.bg3.css({ transform: `translate(0, -${scrollEl / 15}px)` });
    return false;
  },
  getRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  },
  onClickPreview(e) {
    e.preventDefault();
    Router.modals.show(new PreviewModal({ src: $(e.currentTarget).attr('href') }));
  },
});
