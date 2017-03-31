import Epoxy from 'backbone.epoxy';

export default Epoxy.View.extend({
  getSections() {
    return [
      { animate: () => { console.dir(this); }, el: this.el },
    ];
  },
});
