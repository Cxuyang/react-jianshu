import React, {Component} from 'react'
import store from '../store/index.js'
import {getInputChangeAction, getAddItemAction, getDeleteItemAction} from '../store/actionsCreators'
import { Input, Button, List } from 'antd'
class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = store.getState()
    this.inputChange = this.inputChange.bind(this)
    this.addList = this.addList.bind(this)
    this.handleStoreChange = this.handleStoreChange.bind(this)
    store.subscribe(this.handleStoreChange)
  }
  inputChange(e) {
    const action = getInputChangeAction(e.target.value)
    store.dispatch(action)
  }
  addList() {
    const action = getAddItemAction(this.state.inputValue)
    store.dispatch(action)
  }
  deleteItem(targetIndex) {
    const action = getDeleteItemAction(targetIndex)
    store.dispatch(action)
  }
  handleStoreChange () {
    this.setState(store.getState())
  }
  render () {
    return (
      <div style={{margin: '20px'}}>
        <div style={{display: 'flex'}}>
          <Input value={this.state.inputValue} onChange={this.inputChange} placeholder="Basic usage" />
          <Button onClick={this.addList} type="primary">addList</Button>
        </div>
        <List
          bordered
          dataSource={this.state.list}
          renderItem={item => (
            <List.Item>
              {item}
            </List.Item>
          )}
        />
      </div>
    )
  }
}
export default TodoList