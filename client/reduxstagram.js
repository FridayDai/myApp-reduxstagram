/**
 * Created by xplusz on 9/9/16.
 */
import React from 'react';
import { render } from 'react-dom';

import App from './components/App';
import PhotoGrid from './components/PhotoGrid';
import Single from './components/Single';

import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import store, { history } from './store'
import { Provider } from 'react-redux';

const router = (
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={App}>
                <IndexRoute component={PhotoGrid}></IndexRoute>
                <Route path="/view/:postId" component={Single}></Route>
            </Route>
        </Router>
    </Provider>

);

render(router, document.getElementById('root'));