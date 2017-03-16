Backbone.View.prototype.renderTemplate = function(data) {
    if(!this.template) {
        console.log('Template not found');
        return;
    }
    this.$el.html(this.template(data));
};
Backbone.View.prototype.destroy = function() {
    this.onDestroy && this.onDestroy();
    this.undelegateEvents();
    this.removeBindings && this.removeBindings();
    this.stopListening();
    this.unbind();
    this.remove();
};
Backbone.Model.prototype.destroy = function() {
    this.onDestroy && this.onDestroy();
    this.stopListening();
};


// overwrite click events

const delegateEventSplitter = /^(\S+)\s*(.*)$/;
const CLASSNAME = 'touchHover';
const DATANAME = 'notouch';
Backbone.View.prototype.delegateEvents = function (events) {
    events || (events = _.result(this, 'events'));
    if (!events) return this;
    this.undelegateEvents();
    let self = this;
    for (let key in events) {
        let method = events[key];
        if (!_.isFunction(method)) method = this[events[key]];
        if (!method) continue;
        let match = key.match(delegateEventSplitter);
        let eventName = match[1];
        let selector = match[2];
        if (eventName == 'click') {
            if (Modernizr.touchevents) {
                bindEvent.call(this, 'touchstart', selector, function (e) {
                    if ($(e.currentTarget).not('.disabled').length) {
                        $(e.currentTarget).addClass(CLASSNAME);
                    }
                });
                bindEvent.call(this, 'touchmove', selector, function (e) {
                    if ($(e.currentTarget).not('.disabled').length) {
                        $(e.currentTarget).removeClass(CLASSNAME).data(DATANAME, true);
                    }
                });
                (function (method) {
                    bindEvent.call(self, 'touchend', selector, function (e) {
                        if ($(e.currentTarget).not('.disabled').length) {
                            e.preventDefault();
                            let $el = $(e.currentTarget);
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
                bindEvent.call(self, match[1], match[2], function (e) {
                    if ($(e.currentTarget).not('.disabled, [disabled="disabled"]').length) {
                        method.call(self, e);
                        $(e.currentTarget).removeClass(CLASSNAME);
                    }
                });
            })(method);
        } else {
            bindEvent.call(this, match[1], match[2], _.bind(method, this));
        }
    }
    return this;
};

function bindEvent(eventName, selector, buildMethod) {
    eventName += '.delegateEvents' + this.cid;
    if (selector === '') {
        return this.$el.on(eventName, buildMethod);
    } else {
        return this.$el.on(eventName, selector, buildMethod);
    }
};