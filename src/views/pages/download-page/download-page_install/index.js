import IndexPageSection from '../../sectionView';
import template from './download-page_install.jade';
import './download-page_install.scss';
import './download-page_install__animate.scss';

export default IndexPageSection.extend({
  template,
  className: 'download-page_install',
  initialize() {
    const data = {};
    if (window.navigator.platform.indexOf('Win') > -1) {
      data.os = 'Windows';
      data.link = 'https://download.docker.com/win/stable/Docker%20for%20Windows%20Installer.exe';
      data.class = '';
    } else {
      data.os = 'Mac';
      data.link = 'https://download.docker.com/mac/stable/Docker.dmg';
      data.class = 'hide';
    }
    this.renderTemplate(data);
  },
  getSections() {
    return [
      { checkScroll: this.checkScroll.bind(this), el: this.el },
    ];
  },
  checkScroll(scrollTop, scrollElTop) {
    if (scrollElTop < 1300) {
      this.$el.addClass('animate');
      return true;
    }
    return false;
  },
});
