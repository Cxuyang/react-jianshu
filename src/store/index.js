import {createStore, applyMiddleware} from 'redux'
// import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga'
import {reducer} from './reducer.js'
import mySaga from './sagas'

const sagaMiddleware = createSagaMiddleware()
// const store = new createStore(reducer, applyMiddleware(thunk))
const store = new createStore(reducer, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(mySaga)

export default store