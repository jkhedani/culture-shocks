import React, { Component } from "react"
import { Link } from "react-router-dom"

class Home extends Component<{}> {
	
	greeter = (Person) => {
    return "Hello, " + Person.name;
	}
	
	componentDidMount() {
		setTimeout(function () {   window.scrollTo(0, 20); }, 1000);
	}

	render() {
		
		const p = { name: "Home" }
		return (
			<div>
				<h1>{this.greeter(p)}</h1>
				<Link to="/not-home">NotHome</Link>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae venenatis magna. Phasellus vitae laoreet purus. Nam id blandit nunc. Integer non erat nec enim congue tempus a ut nibh. Phasellus elementum mauris nec lectus gravida auctor. Suspendisse ut pellentesque lectus. Nullam ut dictum arcu, in tristique mauris. Ut et mollis mi. Duis semper leo nec consequat placerat.

Phasellus tincidunt eleifend eros, a aliquet purus fringilla eget. Phasellus rhoncus purus sit amet nibh tristique ornare. Aenean eu nisi in lectus egestas tempor id vitae nisi. Pellentesque rhoncus, dui a lacinia hendrerit, nunc lacus imperdiet mi, a consequat tortor nibh ac erat. Aenean eleifend cursus varius. Praesent et euismod neque. Donec ornare turpis nec sapien tristique, at fermentum eros vestibulum. Praesent dictum purus eu convallis sollicitudin.

Curabitur vulputate convallis justo, ac viverra purus tempus eu. Donec faucibus neque et lorem pharetra facilisis. Ut felis urna, sollicitudin tincidunt maximus interdum, feugiat vel lacus. In volutpat eros eget nisl tincidunt scelerisque eu sed sem. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed nec lobortis lorem. Sed molestie ullamcorper sem eu condimentum. Duis molestie, erat a fringilla tristique, felis lacus ultrices urna, eget porta felis dolor non sem. Donec suscipit semper sem non imperdiet. Etiam ac orci felis. Nulla sagittis vitae nunc eget aliquet. Vestibulum congue lorem ac vestibulum sagittis.

Integer blandit in ex vel malesuada. Nullam vulputate euismod tempus. Nullam interdum commodo lectus quis pulvinar. Quisque nec sapien vitae tortor rutrum feugiat. Phasellus consequat venenatis sapien at imperdiet. Donec felis orci, sodales a egestas vel, egestas eu ipsum. Suspendisse porta purus id dignissim molestie. Cras euismod quam a erat pellentesque blandit. Praesent venenatis risus et sagittis mollis. Sed aliquam gravida placerat. Curabitur eleifend lobortis lacus, a consectetur massa varius non. Nulla sit amet pharetra nisl. Vestibulum porta sollicitudin interdum. Donec at ante velit. In pulvinar, turpis nec ultrices imperdiet, dui arcu viverra tortor, ut fermentum justo quam et dolor.

Curabitur imperdiet sit amet est eget porta. Nam placerat, massa sed dapibus feugiat, dolor est commodo mauris, at feugiat magna eros sed ipsum. Cras pulvinar, arcu eu scelerisque vehicula, arcu lorem mattis sem, id varius nulla magna in leo. Vestibulum feugiat tristique nibh sed dictum. Praesent blandit et erat sed sodales. Nullam lorem risus, sagittis eget odio ac, commodo placerat erat. Aenean eu erat volutpat magna ultricies mattis at at elit. Nulla lobortis ex suscipit, luctus ipsum a, gravida diam. Quisque a mauris aliquam, aliquam nunc vel, rutrum turpis. Donec feugiat diam lectus, eu aliquam metus lacinia sit amet. Mauris luctus magna non velit dictum, id maximus est aliquam. Integer ullamcorper velit tortor, iaculis fringilla mauris venenatis vitae. Quisque vel convallis risus, pulvinar dignissim justo.</p>
 			</div>
		)
	}
}

export default Home