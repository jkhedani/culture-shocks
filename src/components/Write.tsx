import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import WriteShock from "./WriteShock"
import SelectShockType from "./SelectShockType"

class Write extends Component<{}> {
  constructor(props) {
    super(props);
    this.state = {
      slide: 1
    };
  }

  renderDotnav() {
    const nav = [];
    for (let i = 1; i <= 2; i++) {
      nav.push(
        <button key={i} className="dot">
          {i}
        </button>
      );
    }
    return nav;
  }

  goSlide(i) {
    this.setState({ slide: i });
  }

  render() {
    switch (this.state.slide) {
      case 1:
        return (
          <div className="slide onboard-div">
            <div className="content">
              <WriteShock />

              <button
                onClick={() => {
                  this.goSlide(2);
                }}
              >
                Next
              </button>
            </div>
          </div>
        );
        break;
      default:
        return (
          <div className="slide onboard-div">
            <div className="content feeling">
              <SelectShockType />
              <button
                onClick={() => {
                  this.goSlide(1);
                }}
              >
                Prev
              </button>
              <Link to="/dashboard">Done</Link>
            </div>
          </div>
        );
        break;
    }
  }
}

export default Write;
