import React, { Component } from "react";

class Splash extends Component<{}> {
  render() {
    return (
      <div className="splash-logo">
        <img
          src={require("../media/Logo/Logo Color/culture-shocks-logo@4x.png")}
          alt="splash-logo"
        />
      </div>
    );
  }
}

export default Splash;
