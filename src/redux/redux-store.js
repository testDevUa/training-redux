import {combineReducers, createStore} from 'redux';
import feedReducer from './Feed-reducer'

// const { createStore } = require("redux");

let reducers = combineReducers({
    feedReducer
})

let store = createStore(reducers);

export default store;