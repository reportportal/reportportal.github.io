import { $ } from 'backbone';
import Baron from 'common/customLibs/baronScroll';

export default function setupBaronScroll($element, inner, options) {
  const direction = options && options.direction ? options.direction : 'v';
  const wrapHtml = `<div class="baron baron__root baron__clipper ${direction === 'h' ? 'baron__horizontal' : ''}"><div class="baron_scroller"></div></div>`;
  let $rootElement = null;
  if (inner) {
    $element.wrapInner(wrapHtml);
    $rootElement = $element.children('.baron_scroller').children('.baron__root');
  } else {
    $element.wrap(wrapHtml);
    $rootElement = $element.parent('.baron_scroller').parent('.baron__root');
  }
  let baron = null;
  if ($rootElement && $('body').hasClass('no-zero-scroll')) {
    $rootElement.append('<div class="baron__track">' +
      '<div class="baron__control baron__up">▲</div>' +
      '<div class="baron__free">' +
      '<div class="baron__bar"></div>' +
      '</div>' +
      '<div class="baron__control baron__down">▼</div>' +
      '</div>');
    baron = Baron({
      $,
      // cssGuru: true,
      root: $rootElement.get(0),
      scroller: $('.baron_scroller', $rootElement).get(0),
      bar: '.baron__bar',
      scrollingCls: '_scrolling',
      draggingCls: '_dragging',
      direction,
    });
    // baron = $rootElement.baron({
    //   cssGuru: true,
    //   root: '.baron',
    //   scroller: '.baron_scroller',
    //   bar: '.baron__bar',
    //   scrollingCls: '_scrolling',
    //   draggingCls: '_dragging',
    //   direction,
    // });
  }
  const $scrollObject = $element.parent('.baron_scroller');
  if ($scrollObject.length) {
    $scrollObject.get(0).baron = baron;
  }
  return $scrollObject;
}
