import { combineReducers } from 'redux';

import { authReducer } from './authReducer';
import {trReducer} from './trReducer';



export const rootReducer = combineReducers({
    tr: trReducer,
    auth: authReducer
})

