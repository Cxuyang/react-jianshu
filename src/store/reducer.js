import {CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM} from './actionsTypes'
const defaultState = {
  inputValue: '',
  list: []
}
// 上一次state, action
export const reducer = (state = defaultState, action) => {
  const newState = JSON.parse(JSON.stringify(state))
  switch (action.type) {
    case CHANGE_INPUT_VALUE:
      newState.inputValue = action.value
      break;
    case ADD_TODO_ITEM:
      newState.list.push(action.value)
      newState.inputValue = ''
      break;
    case DELETE_TODO_ITEM:
      newState.list.splice(action.value, 1)
      break;
    default:
      break;
  }
  console.log(newState)
  return newState
}