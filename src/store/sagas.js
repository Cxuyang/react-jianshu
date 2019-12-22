import {takeEvery, put} from 'redux-saga/effects'
import {GET_INIT_LIST} from './actionsTypes'
import {initListAction} from './actionsCreators'
import axios from 'axios'
function* getInitListSaga() {
  try {
    let res = yield axios.get('http://localhost:8888')
    const action = initListAction(res.data)
    yield put(action)
  } catch (error) {
  }
}

// 只要接收到 INIT_TODO_LIST 类型的action 就执行getInitListSaga函数
function* mySaga() {
  yield takeEvery(GET_INIT_LIST, getInitListSaga)
}

export default mySaga