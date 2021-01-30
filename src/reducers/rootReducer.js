import { combineReducers } from 'redux';

import {trReducer} from './trReducer';



export const rootReducer = combineReducers({
    tr: trReducer,
})

