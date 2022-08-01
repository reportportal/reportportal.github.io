import { $ } from 'backbone';
import template from './CodeBlockWithHighlightComponent.jade';
import Epoxy from 'backbone.epoxy';

import hljs from 'highlight.js';
import LangPowershell from 'highlight.js/lib/languages/powershell';
import LangXml from 'highlight.js/lib/languages/xml';
import LangJava from 'highlight.js/lib/languages/java';
import LangJson from 'highlight.js/lib/languages/json';
import LangJavaScript from 'highlight.js/lib/languages/javascript';
import LangGroovy from 'highlight.js/lib/languages/groovy';
import LangScala from 'highlight.js/lib/languages/scala';
import 'highlight.js/styles/atom-one-light.css';

export default Epoxy.View.extend({
  className: 'code-highlighter',
  initialize(options) {
    this.language = options.language;
    this.binaryContent = options.binaryContent;
    hljs.registerLanguage(this.language, this.getLanguage(this.language));
    this.render({ binaryContent: this.binaryContent });
  },
  render(options) {
    this.$el.html(template({ binaryContent: options.binaryContent }));
    $('[data-js-code]', this.$el).addClass(this.language);
    hljs.highlightBlock($('[data-js-code]', this.$el)[0]);
  },
  getLanguage(lang) {
    let langLibrary;
    switch (lang) {
      case 'powershell':
        langLibrary = LangPowershell;
        break;
      case 'java':
        langLibrary = LangJava;
        break;
      case 'javascript':
        langLibrary = LangJavaScript;
        break;
      case 'scala':
        langLibrary = LangScala;
        break;
      case 'groovy':
        langLibrary = LangGroovy;
        break;
      case 'json':
        langLibrary = LangJson;
        break;
      default:
        langLibrary = LangXml;
    }
    return langLibrary;
  },
});
