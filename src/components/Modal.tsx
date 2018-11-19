import React, { Component } from "react"
import { Link } from "react-router-dom"
import "./Modal.scss"

class Modal extends Component<{}> {

  constructor(props) {
    super(props)
  }

	render() {    
    return(
      <div className="modal-cs">
        <h1>{this.props.title}</h1>
        <p>{this.props.desc}</p>
        <footer>
          <button>I relate</button>
          <button>Comment</button>
          <button>Close</button>
        </footer>
      </div>
    )
  }
}

export default Modal