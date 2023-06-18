import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import sessionReducer from './reducers/sessionReducer';
import advertsReducer from './reducers/advertsReducer';

const rootReducer = combineReducers({
  session: sessionReducer,
  adverts: advertsReducer,
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;
