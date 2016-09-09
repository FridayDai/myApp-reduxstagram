/**
 * Created by xplusz on 9/9/16.
 */
//mapStateToprops...

import React from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Main from './Main';
import * as actionCreator from '../actions/actionCreator';

function mapStateToProps(state) {
    return {
        posts: state.posts,
        comments: state.comments
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actionCreator, dispatch);
}

const App = connect(mapStateToProps, mapDispatchToProps)(Main);

export default App;