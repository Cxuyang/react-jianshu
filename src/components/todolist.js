import React, {Component} from 'react'

class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inputValue: '',
      list: []
    }
    this.inputChange = this.inputChange.bind(this)
    this.addList = this.addList.bind(this)
  }
  inputChange(e) {
    const inputValue = e.target.value
    this.setState(() => ({
      inputValue
    }))
  }
  addList(e) {
    this.setState((prevState) => ({
      list: [...prevState.list, prevState.inputValue],
      inputValue: ''
    }))
  }
  deleteItem(targetIndex) {
    let list = [...this.state.list]
    list.splice(targetIndex, 1)
    this.setState(() => ({
      list
    }))
  }
  render () {
    return (
      <div>
        <input value={this.state.inputValue} onChange={this.inputChange}></input>
        <button onClick={this.addList}>addList</button>
        <ul>
          {this.state.list.map((item, index) => {
            return (
              <div key={index}>
                <li>{item}</li>
                <button onClick={this.deleteItem.bind(this, index)}>删除</button>
              </div>
            )
          })}
        </ul>
      </div>
    )
  }
}
export default TodoList