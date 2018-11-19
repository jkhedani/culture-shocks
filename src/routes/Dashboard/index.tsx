import React, { Component } from "react"
import { Link } from "react-router-dom"

import "./Dashboard.css"
import CommList from "../../components/CommunityList"
import Write from "../../components/Write"
// import Account from "../../components/Account"

class Dashboard extends Component<{}> {

  constructor(props) {
    super(props)
    this.state = {
      slide: 1
    }
  }

  renderFooter() {
    return (
      <div id="footer" className="container">
        <div className="row">
          <div className="col s4">
            <a onClick={() => { this.goSlide(1) }}>
              <i className="fonts fas fa-globe"></i>
              <p className="footer-name">Community</p>
            </a>
          </div>
          <div className="col s4">
            <a onClick={() => { this.goSlide(2) }}>
              <i className=" fonts far fa-edit"></i>
              <p className="footer-name">Write</p>
            </a>
          </div>
          <div className="col s4">
            <a onClick={() => { this.goSlide(3) }}>
              <i className="fonts far fa-user-circle"></i>
              <p className="footer-name">Account</p>
            </a>
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
              <CommList />
            </div>
            <div>
              {this.renderFooter()}
            </div>
          </div>
        )
        break;
      case 2:
        return (
          <div>
            <div className="content">
              <Write />
            </div>
            <div>
              {this.renderFooter()}
            </div>
          </div>
        )
        break;
      default:
        return (
          <div>
            <div className="content">
              <img className="my-journey" src={require("../../media/my-journey.jpg")} />
            </div>
            <div>
              {this.renderFooter()}
            </div>
          </div>
        )
        break;
    }
	}
}

export default Dashboard;