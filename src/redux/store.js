import { combineReducers, createStore } from 'redux';
import { contactReducer } from './contactReducer';

const rootReducer = combineReducers({
  userContacts: contactReducer,
});

export const store = createStore(rootReducer);
