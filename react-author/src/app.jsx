import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
// import Login from './pages/login/login';
import Home from './pages/home/home';
export default class App extends React.Component {
  render () {
    return (
      <div className="bg main">
        <BrowserRouter>
          <Switch>
            {/* <Route path='/login' component={Login}></Route> */}
            <Route path='/home' component={Home}></Route>
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}