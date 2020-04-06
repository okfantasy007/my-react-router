import React, {Component} from 'react';
import {Consumer} from "./context";

class Comp extends Component {
	render() {
		return (
			<Consumer>
				{
					({push}) => {
						/*
						* 如果使用a标签，切记 不可加 href=""，要不然点击除 /home 外的路由，都会重定向到 /home
						* href = {null} 或 不加href 都是正常的
						* */
						return <span onClick={() => push(this.props.to)}>{this.props.children}</span>
					}
				}
			</Consumer>
		);
	}

}

export default Comp;