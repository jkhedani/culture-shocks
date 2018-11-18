import React, { Fragment, Component } from 'react';

class SelectShockType extends Component<{}> {
  render() {
    return (
      <div>
        <h3>Is your culture shock...</h3>
        <div>
          <button type="button">Political</button>
          <button type="button">Social</button>
        </div>
        <div>
          <button type="button">Academic</button>
          <button type="button">Daily Life</button>
        </div>
      </div>
    );
  }
}

export default SelectShockType;
