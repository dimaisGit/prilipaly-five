import React from 'react';
import StartComponent from "./components/StartComponent";
import PageComponent from "./components/PageComponent";
class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isStartComponentOpen: true
		}
	}

	handleCloseStartComponent = () => {
		this.setState({
			isStartComponentOpen: false
		})
	}

	render() {
		const { isStartComponentOpen } = this.state

		return (
			<div>
				{isStartComponentOpen ?
					<StartComponent handleCloseWindow={this.handleCloseStartComponent}/>
					:
					<PageComponent />
				}
			</div>
		);
	}
}

export default App;
