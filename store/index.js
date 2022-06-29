import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import messariReducers from './reducers/messariReducers';
const rootReducer = combineReducers({
  cryptos: messariReducers,
});
const store = createStore(rootReducer, applyMiddleware(thunk));
export default store;
