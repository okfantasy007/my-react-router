import React, {Component} from 'react';
import {Consumer} from "./context";
import {pathToRegexp as pathToRegExp} from "path-to-regexp";

class Comp extends Component {
	getRealKeys = (path, pathname, exact) => {
		let keys = [];
		const regexp = pathToRegExp(path, keys, {end: exact || false});
		keys = keys.map((item) => {
			return item.name;
		});
		console.log("keys", keys);
		let res = {
			match: {}
		};
		let macthR = {};
		const matchRes = pathname.match(regexp);
		if (matchRes) {
			console.log(matchRes);// ["/user/1/2", "1", "2", index: 0, input: "/user/1/2", groups: undefined]
			const [url, ...values] = matchRes;
			for (let i = 0; i < keys.length; i++) {
				let key = keys[i];
				macthR[key] = values[i];
			}
		}
		res.match = macthR;
		console.log(res);
		return res;
	};

	render() {
		return (
			<Consumer>
				{
					({pathname}) => {
						const {exact, component: Component} = this.props;
						let path = this.props.path;
						let keysFromPathName = this.getRealKeys(path, pathname, exact);
						// /user/:id/:name
						if (path.indexOf("/:") !== -1) {
							path = path.split("/:")[0];
						}
						let keys = [];
						const regexp = pathToRegExp(path, [], {end: exact || false});
						console.log("keys", keys);
						if (pathname.match(regexp)) {
							return <Component {...keysFromPathName}/>;
						}
						return null;
					}
				}
			</Consumer>
		);
	}

}

export default Comp;