import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Login from './pages/login/login'
import Home from './pages/home/home'
import Article from './pages/article/article'
import { connect } from 'react-redux'
class App extends React.Component {
  state = {
    theme: {
      default: 'main',
      article: 'article',
      video: 'video',
      chat: 'chat',
      about: 'about'
    }
  }
  render () {
    return (
      <div className={'bg '+ this.props.theme}>
        <BrowserRouter>
          <Switch>
            <Route path='/login' component={Login}></Route>
            <Route exact path='/' component={Home}></Route>
            <Route path= '/article' component={Article}></Route>
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}
const mapStateToProps = state => {
  return {
    theme: state
  }
}
export default connect(mapStateToProps)(App)