/**
 * Created by xplusz on 9/9/16.
 */
import { createStore, compose } from 'redux';
import { browserHistory } from 'react-router';

import posts from './data/posts';
import comments from './data/comments';


import rootReducer from './reducers/index';

import { syncHistoryWithStore } from 'react-router-redux';

const defaultState = {
   posts,
   comments
};

const store = createStore(rootReducer, defaultState);

export const history = syncHistoryWithStore(browserHistory, store);

export default store;