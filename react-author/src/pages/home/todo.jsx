import React from 'react'
import Todoitem from './todoitem'
import './todo.styl'

export default class Todo extends React.Component {

  state = {
    todoItem: [
      { icon: require('../../assets/article.svg'), text: '文章', className: 'article', path: '/article'},
      { icon: require('../../assets/video.svg'), text: '视频', className: 'video', path: '/video'},
      { icon: require('../../assets/chat.svg'), text: '讲讲', className: 'chat', path: '/chat'},
      { icon: require('../../assets/about.svg'), text: '关于', className: 'about', path: '/about'}
    ]
  }

  render () {
    const { todoItem } = this.state
    return (
      <div id="todo">
        {
          todoItem.map((item, index) => (
            <Todoitem key={index} item={item}></Todoitem>
          ))
        }
      </div>
    )
  }
}