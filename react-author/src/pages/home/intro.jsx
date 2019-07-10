import React from 'react'
import './intro.styl'
import img from '../../assets/avatar.jpg'

export default class Intro extends React.Component {
  state = {
    nickName: 'Coldday',
    autograph: '世界这么大，多出去转转吧'
  }

  render () {
    const { nickName, autograph } = this.state
    return (
      <div id="intro">
        <div className="avatar">
          <img src={img} alt=""/>
        </div>
        <div className="nickName">{nickName}</div>
        <div className="autograph">
          {autograph}
        </div>
      </div>
    )
  }
}