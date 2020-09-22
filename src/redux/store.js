// import {createStore, applyMiddleware} from 'redux';
// import Testreducer from './reducers/countryReducer';
// export const store = createStore(Testreducer)

// eslint-disable-next-line no-undef
//export default store = createStore(Testreducer);

// import { createStore, applyMiddleware, compose } from 'redux';
// import thunk from 'redux-thunk'
// import rootReducer from './reducers'
// const initialState = {}
// const middleware = [thunk]
// // const store = createStore(() => [], {}, applyMiddleware())

// const store = createStore(
//     rootReducer,
//     initialState,
//     compose(
//        applyMiddleware(...middleware)
//     )
//     )
// export  default store

import {createStore, applyMiddleware} from 'redux';
 import thunk from 'redux-thunk';

import reducers from '../redux/reducers/index'; //Import the reducer

// Connect our store to the reducers
export default createStore(reducers,applyMiddleware(thunk));
