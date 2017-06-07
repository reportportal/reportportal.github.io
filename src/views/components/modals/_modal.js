import { $ } from 'backbone';
import Epoxy from 'backbone.epoxy';
import template from './Modals.jade';
import './Modals.scss';

export default Epoxy.View.extend({
  template,
  className: 'modal-container',

  initialize() {
    this.renderTemplate();
    this.activeModal = null;
  },
  onDestroy() {
    this.activeModal && this.activeModal.destroy();
  },
});
