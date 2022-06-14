import React from 'react';
import ReactDOM from 'react-dom';
import Epoxy from 'backbone.epoxy';
import ModalProvider from 'react-components/layouts/modal-layout/modal-provider/modalProvider.jsx';

export default (Component) =>
  Epoxy.View.extend({
    render() {
      ReactDOM.render(
        <React.StrictMode>
          <ModalProvider>
            <Component {...this.model} />
          </ModalProvider>
        </React.StrictMode>,
        this.el,
      );
      return this;
    },
    remove() {
      ReactDOM.unmountComponentAtNode(this.el);
      Epoxy.View.prototype.remove.call(this);
    },
  });
