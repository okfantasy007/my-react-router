import React, {Component} from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route, Redirect, Link} from './react-router-dom';
import Home from "./Home";
import Profile from "./Profile";
import User from "./User";

class App extends Component {
	render() {
		return (
			<div className="App">
				<Router>
					<div>
						<div>
							<button><Link to="/home">首页</Link></button>
							<button><Link to="/profile">个人中心</Link></button>
							<button><Link to="/user">用户列表</Link></button>
						</div>
						<Switch>
							<Route path="/home" exact component={Home}/>
							<Route path="/profile" component={Profile}/>
							<Route path="/user" component={User}/>
							<Redirect to="/home"/>
						</Switch>
					</div>
				</Router>
			</div>
		);
	}

}

export default App;
