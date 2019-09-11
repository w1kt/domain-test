import { createStore, compose } from 'redux';
import rootReducer from './reducers/rootReducer';

const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancers();
// other store enhancers if any
const store = createStore(rootReducer, enhancer);

export default store;
