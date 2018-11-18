import React, { Component } from "react"
import { Link } from "react-router-dom"
import { observer, inject } from "mobx-react"
import CultureShock from "./CultureShock"
import Modal from "./Modal"
import "./CommunityList.scss"

class CommList extends Component<{}> {

  constructor(props) {
    super(props)
    this.state = {
      modalVisible: false
    }
  }

  renderCultureShocks(cshocks) {
    const cs = []
    for (let i = 0; i < cshocks.length; i++) {
      cs.push(
        <div key={i} className="culture-shock" onClick={() => { this.toggleModal() }}>
          <h3>{cshocks[i].title}</h3>
          <p>{cshocks[i].desc}</p>
          <div>
            <button>[]{cshocks[i].user}</button>
            <button>I Relate</button>
          </div>
        </div>
      )
    }
    return cs
  }

  toggleModal() {
    console.log("tests")
    const c = this.state.modalVisible
    this.setState({modalVisible: !c})
  }

  renderModal(title, desc) {
    return (
      <div className="modal-cs">
        <h1>{title}</h1>
        <p>{desc}</p>
        <footer>
          <button>I relate</button>
          <button>Comment</button>
          <button onClick={() => { this.toggleModal() }}>Close</button>
        </footer>
      </div>
    )
  }

	render() {
    const t = this.props.CultureShock.CultureShocks
    
    return (
      <div>
        <h1>Academic community</h1>
        {this.renderCultureShocks(t)}
        {this.state.modalVisible ? this.renderModal(t[0].title,t[0].desc) : null}
      </div>
    )


  }
}

// export default CommList
export default inject("CultureShock")(observer(CommList))