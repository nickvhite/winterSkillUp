import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'; // redux dev tools

import thunk from 'redux-thunk';
// import createSagaMiddleware from 'redux-saga';

import rootReducer from '../reducers';
// import rootSaga from '../sagas';

export default function configureStore(initialState) {
  // const sagaMiddleware = createSagaMiddleware();

  const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunk, /*sagaMiddleware*/))
  );

  // sagaMiddleware.run(rootSaga);
  return store;
}
