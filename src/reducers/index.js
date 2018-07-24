import { combineReducers } from 'redux';
import { userReducer } from './user-reducer';

export const allState = combineReducers({
    users: userReducer
  });