import "babel-polyfill";
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { Home, NotHome, Login, NoMatch } from './routes';
import "./styles/index.scss"
import * as stores from './stores';

const App = () => (
	<Provider {...stores}>
		<Router>
      <Route render={({ location}) => (
        <div id="wrapper">
          <TransitionGroup>
            <CSSTransition
              key={location.key}
              classNames="fade"
              timeout={300}
            >
              <Switch>
                <Route exact path="/login" component={Login} />
                <Route exact path="/not-home" component={NotHome} />
                <Route exact path="/" component={Home} />
                <Route component={NoMatch} />	    		
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        </div>
      )}
		/>
    </Router>	  
  </Provider>  
)

ReactDOM.render(
	<App />,
	document.getElementById('root')
);