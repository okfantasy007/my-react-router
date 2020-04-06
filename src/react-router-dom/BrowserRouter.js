import React, {Component} from 'react';
import {Provider} from "./context";

class Comp extends Component {
	constructor(props) {
		super(props);
		console.log("BrowserRouter.js constructor");
		this.state = {
			pathname: window.location.pathname
		}
	}

	componentDidMount() {
		/*
		* popstate只能监听 浏览器 前进 后退
		* 或者 js history.go(n) / histroy.back(n) / history.forward()
		* pushState事件并不会触发 popstate
		* */
		console.log("BrowserRouter.js componentDidMount");
		window.addEventListener("popstate", this.setPathName);
	}

	componentWillUnmount() {
		console.log("BrowserRouter.js componentWillUnmount");
		window.removeEventListener("popstate", this.setPathName);
	};

	setPathName = () => {
		console.log("trigger popstate");
		this.setState({
			pathname: window.location.pathname
		})
	};

	push = (path) => {
		console.log("BrowserRouter.js push");
		window.history.pushState({}, "", path);
		console.log("BrowserRouter.js push setState");
		this.setState({
			pathname: window.location.pathname
		})
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