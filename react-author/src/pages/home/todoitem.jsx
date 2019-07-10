import React from 'react'
import './todoitem.styl'

export default class Todoitem extends React.Component {
  todoitem = (path) => {
    // this.props.history.push(path)
  }

  render () {
    const { item } = this.props
    return (
      <div id="todoitem" className={item.className} onClick={this.todoitem}>
        <img src={item.icon} alt=""/>
        <div className="text">{item.text}</div>
      </div>
    )
  }
}