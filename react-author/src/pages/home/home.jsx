import React from 'react'
import Intro from './intro'
import Todo from './todo'
import './home.styl'

export default class Home extends React.Component {
  render () {
    return (
      <div id="home">
        <div className="center">
          <Intro></Intro>
          <Todo></Todo>
        </div>
      </div>
    )
  }
}