import React from 'react';
import {
  BrowserRouter as Router, 
  Route, 
  Switch, 
} from 'react-router-dom';
import {LoginScreen} from '../components/LoginScreen';
import {HomeScreen} from '../components/HomeScreen';
import DashboardRouters from './DashboardRouters';



const AppRouter = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route 
            exact
            path="/login" 
            component={LoginScreen}
          />
          <Route 
            exact
            path="/tr" 
            component={DashboardRouters}
          />
          <Route 
            exact
            path="/" 
            component={HomeScreen}
          />
        </Switch>
      </div>
    </Router>
  )
}

export default AppRouter;
