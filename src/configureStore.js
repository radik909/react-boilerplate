import { createStore } from 'redux';
import reducer from './reducers';

export default function configureStore() {
  return createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
}
