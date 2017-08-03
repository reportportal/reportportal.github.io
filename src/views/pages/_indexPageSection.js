import Epoxy from 'backbone.epoxy';

export default Epoxy.View.extend({
  getSections() {
    return [
      { checkScroll: (scrollTop, scrollElTop) => false, el: this.el },
    ];
  },
});
