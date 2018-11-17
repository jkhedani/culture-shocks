import React, { Component } from "react"
import { Link } from "react-router-dom"

class NotHome extends Component<{}> {
	
	greeter = (Person) => {
    return "Hello, " + Person.name;
	}
	
	render() {
		const p = { name: "NotHome" }
		return (
			<div>
				<h1>{this.greeter(p)}</h1>
				<Link to="/">Home</Link>
			</div>
		)
	}
}

export default NotHome