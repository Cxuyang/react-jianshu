import React, {Component} from 'react'

class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inputValue: '',
      list: []
    }
  }
  inputChange(e) {
    this.setState({
      inputValue: e.target.value
    })
  }
  addList(e) {
    this.setState({
      list: [...this.state.list, this.state.inputValue],
      inputValue: ''
    })
  }
  deleteItem(targetIndex) {
    let _list = [...this.state.list]
    _list.splice(targetIndex, 1)
    this.setState({
      list: _list
    })
  }
  render () {
    return (
      <div>
        <input value={this.state.inputValue} onChange={this.inputChange.bind(this)}></input>
        <button onClick={this.addList.bind(this)}>addList</button>
        <ul>
          {this.state.list.map((item, index) => {
            return (
              <div>
                <li key={index}>{item}</li>
                <button onClick={this.deleteItem.bind(this, index)} key={index}>删除</button>
              </div>
            )
          })}
        </ul>
      </div>
    )
  }
}
export default TodoList