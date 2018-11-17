import React, { Component } from "react"

class Home extends Component<{}> {
	
	greeter = (Person) => {
		return "Hello, " + Person.name;
	}
	
	render() {
		return (
			<div>
				<h1>{"Login"}</h1>
				<form>
					<input name="username" type="text" placeholder="username" />
					<input name="password" type="password" placeholder="password" />
				</form>
			</div>
		)
	}
}

export default Home