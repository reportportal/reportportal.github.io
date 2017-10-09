import Epoxy from 'backbone.epoxy';

export default Epoxy.View.extend({
  getSections() {
    return [
      { checkScroll: () => false, el: this.el },
    ];
  },
});
