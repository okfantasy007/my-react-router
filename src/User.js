import React, {Component} from 'react';
import {Switch, Route, Link} from './react-router-dom';
import Add from "./user/Add";
import Detail from "./user/Detail";

class Comp extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		console.log("User", this.props);
		return (
			<div>
				<h1>用户列表</h1>
				<div>
					<div><button><Link to="/user/add">添加用户</Link></button></div>
					<div><button><Link to="/user/detail">用户详情</Link></button></div>
					<Switch>
						<Route path="/user/add" component={Add}/>
						<Route path="/user/detail" component={Detail}/>
						{/*<Route><Redirect to="/user"/></Route>*/}
					</Switch>
				</div>
			</div>
		);
	}

}

export default Comp;