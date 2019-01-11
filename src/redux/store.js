
import { createStore, applyMiddleware, combineReducers } from 'redux';
// import { persistReducer, persistStore } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'remote-redux-devtools';
import { contextReducer } from './reducers/contextReducer';

// const persistConfig = {
//   key: 'root',
//   storage,
// };

const rootReducer = combineReducers({
  context: contextReducer,
})

// const persistedReducer = persistReducer(persistConfig, rootReducer);

const enhancer = composeWithDevTools(applyMiddleware(thunk));

export const store = createStore(rootReducer, enhancer);

// export const persistor = persistStore(store);
