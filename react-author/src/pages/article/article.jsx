import React from 'react'
import './article.styl'

export default class Article extends React.Component {
  state = {
    value: ''
  }

  handleChange(value) {
    this.setState({
      value
    })
  }

  render () {
    let value = this.state.value
    return (
      <div id="article">
      </div>
    )
  }
}