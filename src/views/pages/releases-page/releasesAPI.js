import { $ } from 'backbone';
import BaronScroll from 'utils/baronScroll';

export default {
  init(anchor, releasesData) {
    console.log(releasesData);

    BaronScroll($('[data-js-releases-menu] .sidenav'));

    // this.renderReleases(anchor); // TODO: make it work
  },
  destroy() {},
};
