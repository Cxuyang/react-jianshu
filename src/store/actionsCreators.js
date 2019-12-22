import {CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM, INIT_TODO_LIST, GET_INIT_LIST} from './actionsTypes'
import axios from 'axios'

export const getInputChangeAction = (value) => ({
  type: CHANGE_INPUT_VALUE,
  value
})
export const getAddItemAction = (value) => ({
  type: ADD_TODO_ITEM,
  value
})
export const getDeleteItemAction = (value) => ({
  type: DELETE_TODO_ITEM,
  value
})
export const initListAction = (value) => ({
  type: INIT_TODO_LIST,
  value
})
// export const getInitListAction = () => {
//   return (dispatch) => {
//     axios.get('http://localhost:8888').then(res => {
//       const action = initListAction(res.data)
//       dispatch(action)
//     })
//   }
// }
export const getInitListAction = (value) => ({
  type: GET_INIT_LIST
})