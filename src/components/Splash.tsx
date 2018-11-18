import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Splash extends Component<{}> {
  render() {

    return (
      <div className="splash-logo">
        <Link to="/login">
          <img
            src={require('../media/Logo/Logo Color/culture-shocks-logo@4x.png')}
            alt="splash-logo"
          />
        </Link>
      </div>
    );
  }
}

export default Splash;
