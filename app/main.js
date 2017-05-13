import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './components/App';

import rootReducer from './reducers';

let store = createStore(
  rootReducer,
  (module.hot && module.hot.data && module.hot.data.counter) || 0,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

if (module.hot) {
  module.hot.accept('./reducers', () => {
    store.replaceReducer(require('./reducers').default);
  });
  module.hot.accept();
  module.hot.dispose(data => {
    data.counter = store.getState();
    [].slice.apply(document.querySelector('#app').children).forEach(function(c) {
      c.remove();
    });
  });
}

const load = () => {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.querySelector('#app')
  );
};

if (document.readyState !== 'complete') {
  document.addEventListener('DOMContentLoaded', load);
} else {
  load();
}
