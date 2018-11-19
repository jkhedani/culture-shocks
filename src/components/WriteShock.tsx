import React, { Fragment, Component } from 'react';

class WriteShock extends Component<{}> {
  render() {
    return (
      <div>
        <h3>Share your culture shock story</h3>
        <textarea rows="4" cols="50" />
        <div>
          <button type="button">Save</button>
          <button type="button">Share</button>
        </div>
      </div>
    );
  }
}

export default WriteShock;
