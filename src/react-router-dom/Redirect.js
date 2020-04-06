import React, {Component} from 'react';
import {Consumer} from "./context";

class Comp extends Component {
	render() {
		return (
			<Consumer>
				{
					({push}) => {
						/*
						push方法，用setTimeout包裹，加入异步队列
						避免重定向后控制台报错
						* */
						setTimeout(() => {
							push(this.props.to);
						});
					}
				}
			</Consumer>
		);
	}

}

export default Comp;