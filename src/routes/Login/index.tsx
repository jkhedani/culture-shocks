import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component<{}> {
  greeter = Person => {
    return 'Hello, ' + Person.name;
  };

  render() {
    return (
      <div>
        <h1></h1>
        <form>
          <img
            src={require('../../media/Logo/Logo Color/culture-shocks-logo@4x.png')}
            alt="splash-logo"
          />
          <div>Logo</div>
          <input name="username" type="text" placeholder="username" />
          <input name="password" type="password" placeholder="password" />
          <Link to="/onboard">Login</Link>
        </form>
      </div>
    );
  }
}

export default Home;
