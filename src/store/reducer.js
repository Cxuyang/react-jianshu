
import {combineReducers} from 'redux-immutable'
import {reducer as headerReducer} from '../common/header/store'
// 上一次state, action
const reducer = combineReducers({
  header: headerReducer
})
export default reducer