import "babel-polyfill";
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { Home, Onboard, Dashboard, Login, NoMatch } from './routes';
import "./styles/index.scss"
import * as stores from './stores';

// Tmp component
import Splash from "./components/Splash"
import CommList from "./components/CommunityList"

const App = () => (
  <Provider {...stores}>
    <Router>
      <div id="wrapper">
        <Switch>
          <Route exact path="/commlist" component={CommList} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/onboard" component={Onboard} />
          <Route path = "/dashboard" component = {Dashboard} />
          <Route component={NoMatch} />	    		
        </Switch>
      </div>
    </Router>
  </Provider>
);

ReactDOM.render(<App />, document.getElementById("root"));
