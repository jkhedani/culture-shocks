// @flow
import React, { Component } from 'react';
import {
  Grid,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';

class NoMatch extends Component<{}> {  
  render() {
    return (
      <div className="App">
        <Grid>
          <h1>404</h1>
          <p>
            <Link to="/">Back To Home</Link>
          </p>
        </Grid>
      </div>
    );
  }
}

export default NoMatch;
