import React, { Component } from "react"

class Home extends Component<{}> {
	
	greeter = (Person) => {
    return "Hello, " + Person.name;
	}
	
	render() {
		const p = { name: "Parcel" }
		return (
			<div>
				<h1>{this.greeter(p)}</h1>
			</div>
		)
	}
}

export default Home