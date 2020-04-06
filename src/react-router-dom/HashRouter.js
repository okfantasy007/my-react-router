import React, {Component} from 'react';
import {Provider} from "./context";

class Comp extends Component {
	constructor(props) {
		super(props);
		this.state = {
			pathname: window.location.hash.slice(1) || "/"
		}
	}

	componentDidMount() {
		window.location.hash = window.location.hash || "/";
		window.addEventListener("hashchange", () => {
			this.setState({
				pathname: window.location.hash.slice(1)
			})
		})
	}

	push = (path) => {
		window.location.hash = path;
	};

	render() {
		const params = {
			pathname: this.state.pathname,
			push: this.push
		};
		return (
			<Provider value={params}>
				{this.props.children}
			</Provider>
		);
	}

}

export default Comp;