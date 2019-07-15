import React from 'react'
import Intro from './intro'
import Todo from './todo'
import './home.styl'
import { connect } from 'react-redux'

class Home extends React.Component {
  render () {
    this.props.dispatch({type: 'CHANGE', color: 'main'})
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

export default connect()(Home)