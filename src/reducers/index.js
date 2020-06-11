import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import fields from './fields';
import formState from './forms';

const rootReducer = combineReducers({ formState, fields, routing: routerReducer });

export default rootReducer;