/* eslint-disable */
import Backbone, { $ } from 'backbone';
import _ from 'underscore';
import Modernizr from 'modernizr';

Backbone.View.prototype.renderTemplate = function renderTemplate(data) {
  if (!this.template) {
    console.log('Template not found');
    return;
  }
  this.$el.html(this.template(data));
};
Backbone.View.prototype.destroy = function destroy() {
  this.onDestroy && this.onDestroy();
  this.undelegateEvents();
  this.removeBindings && this.removeBindings();
  this.stopListening();
  this.unbind();
  this.remove();
};
Backbone.Model.prototype.destroy = function destroy() {
  this.onDestroy && this.onDestroy();
  this.stopListening();
};


// overwrite click events

const delegateEventSplitter = /^(\S+)\s*(.*)$/;
const CLASSNAME = 'touchHover';
const DATANAME = 'notouch';
Backbone.View.prototype.delegateEvents = function delegateEvents(events) {
  events || (events = _.result(this, 'events'));
  if (!events) return this;
  this.undelegateEvents();
  const self = this;
  for (const key in events) {
    let method = events[key];
    if (!_.isFunction(method)) method = this[events[key]];
    if (!method) continue;
    const match = key.match(delegateEventSplitter);
    const eventName = match[1];
    const selector = match[2];
    if (eventName === 'click') {
      if (Modernizr.touchevents) {
        bindEvent.call(this, 'touchstart', selector, (e) => {
          if ($(e.currentTarget).not('.disabled').length) {
            $(e.currentTarget).addClass(CLASSNAME);
          }
        });
        bindEvent.call(this, 'touchmove', selector, (e) => {
          if ($(e.currentTarget).not('.disabled').length) {
            $(e.currentTarget).removeClass(CLASSNAME).data(DATANAME, true);
          }
        });
        (function (method) {
          bindEvent.call(self, 'touchend', selector, (e) => {
            if ($(e.currentTarget).not('.disabled').length) {
              e.preventDefault();
              const $el = $(e.currentTarget);
              if (!$el.data(DATANAME)) {
                $(':focus').blur();
                method.call(self, e);
              }
              $el.removeClass(CLASSNAME).data(DATANAME, false);
            }
          })(method);
        });
      }
      (function (method) {
        bindEvent.call(self, match[1], match[2], (e) => {
          if ($(e.currentTarget).not('.disabled, [disabled="disabled"]').length) {
            method.call(self, e);
            $(e.currentTarget).removeClass(CLASSNAME);
          }
        });
      }(method));
    } else {
      bindEvent.call(this, match[1], match[2], _.bind(method, this));
    }
  }
  return this;
};

function bindEvent(eventName, selector, buildMethod) {
  eventName += `.delegateEvents${this.cid}`;
  if (selector === '') {
    return this.$el.on(eventName, buildMethod);
  }
  return this.$el.on(eventName, selector, buildMethod);
}
