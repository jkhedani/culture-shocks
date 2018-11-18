import React, { Component } from "react"
import { Link } from "react-router-dom"


class Dashboard extends Component<{}> {

  constructor(props) {
    super(props)
    this.state = {
      slide: 1
    }
  }

  renderDotnav() {
    return (
      <div className="container">
        <div className="row">
          <div className="col s4">
            <i className="fonts fas fa-globe"></i>
              <p className="footer-name">Community</p>
          </div>
          <div className="col s4">
            <i className=" fonts far fa-edit"></i>
              <p className="footer-name">Write</p>
          </div>
          <div className="col s4">
            <i className="fonts far fa-user-circle"></i>
              <p className="footer-name">Account</p>
            </div>
          </div>
      </div>
    )
  }

  goSlide(i) {
    this.setState({slide: i})
  }

	render() {
    switch (this.state.slide) {
      case 1:
        return (
          <div>    
            <div className="content">
              <h2>Slide A</h2>
              <p>Test content as a paragraph</p>
              <button onClick={() => { this.goSlide(2) }}>Next</button>
            </div>
            <div>
              {this.renderDotnav()}
            </div>
          </div>
        )
        break;
      case 2:
        return (
          <div>    
            <div className="content">
              <h2>Slide B</h2>
              <p>Test content as a paragraph</p>
              <button onClick={() => { this.goSlide(1) }}>Prev</button>
              <button onClick={() => { this.goSlide(3) }}>Next</button>
            </div>
            <div>
              {this.renderDotnav()}
            </div>
          </div>
        )
        break;
      default:
        return (
          <div>    
            <div className="content">
              <h2>Slide C</h2>
              <p>Test content as a paragraph</p>
              <button onClick={() => { this.goSlide(2) }}>Prev</button>
            </div>
            <div>
              {this.renderDotnav()}
            </div>
          </div>
        )
        break;
    }
	}
}

export default Dashboard;