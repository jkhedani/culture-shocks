import React, { Component } from 'react';
import SelectCountry from './SelectCountry';
import SelectFeeling from './SelectFeeling';
import { Link } from 'react-router-dom';

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
              <h3>Where are you originating from?</h3>
              <SelectCountry />

              <button
                onClick={() => {
                  this.goSlide(2);
                }}
              >
                Next
              </button>
            </div>
            <div>{this.renderDotnav()}</div>
          </div>
        );
        break;
      default:
        return (
          <div className="slide onboard-div">
            <div className="content feeling">
              <h3>How are you feeling?</h3>
              <h2 className="image"> image here</h2>
              <SelectFeeling />
              <button
                onClick={() => {
                  this.goSlide(1);
                }}
              >
                Prev
              </button>
              <Link to="/dashboard">Done</Link>
            </div>
            <div>{this.renderDotnav()}</div>
          </div>
        );
        break;
    }
  }
}

export default Write;
