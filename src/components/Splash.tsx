import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Splash extends Component<{}> {
  render() {

    return (
      <div className="splash-logo">
        <Link to="/login">
          <img
            src={require('../media/spash.png')}
            alt="splash-logo"
          />
        </Link>
      </div>
    );
  }
}

export default Splash;
