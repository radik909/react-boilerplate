/*@flow*/
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import saga from './saga';
import reducer from './reducer';
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();

const reduxDevTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(
  reducer,
  compose(applyMiddleware(sagaMiddleware), reduxDevTools)
);

sagaMiddleware.run(saga);

const rootElement = document && document.getElementById('root');
if (!(rootElement instanceof Element)) {
  throw new Error('Invalid DOM Element');
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
registerServiceWorker();
