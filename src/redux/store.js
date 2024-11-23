import { createStore } from 'redux';
import { combineReducers } from 'redux';
import cartReducer from './reducers/cartReducer'; // Ensure this path is correct

const rootReducer = combineReducers({
  cart: cartReducer, // Cart reducer is part of the rootReducer
});

const store = createStore(rootReducer);

export default store;
