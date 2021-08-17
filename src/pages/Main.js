import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AddAuth from '../components/AddAuth';
import Login from '../components/Login';

export default function Main() {
  return (
    <div>
      <Router>
      <h1>메인페이지 임미다</h1>
        <Switch>
          <Route path="/" exact component={AddAuth} />
          <Route path="/login" exact component={Login} />
        </Switch>
      </Router>
    </div>
  )
}
