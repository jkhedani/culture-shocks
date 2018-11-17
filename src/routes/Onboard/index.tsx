import React, { Component } from "react"
import { Link } from "react-router-dom"

class Onboard extends Component<{}> {

  constructor(props) {
    super(props)
    this.state = {
      slide: 1
    }
  }

  renderDotnav() {
    const nav = []
    for (let i = 1; i <= 3; i++) {
      nav.push(<button key={i} className="dot">{i}</button>)
    }
    return nav
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

export default Onboard