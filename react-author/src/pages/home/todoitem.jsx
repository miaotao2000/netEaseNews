import React from 'react'
import './todoitem.styl'
import { connect } from 'react-redux'

class Todoitem extends React.Component {
  changeTheme = (color) => {
   this.props.dispatch({type: 'CHANGE', color})
  }

  render () {
    const { item } = this.props
    return (
      <div id="todoitem" className={'item' + item.className} onClick={this.changeTheme.bind(this, item.className)}>
        <img src={item.icon} alt=""/>
        <div className="text">{item.text}</div>
      </div>
    )
  }
}

export default connect()(Todoitem)