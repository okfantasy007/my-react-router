import React, {Component} from 'react';
import {Consumer} from "./context";
import {pathToRegexp as pathToRegExp} from "path-to-regexp";

class Comp extends Component {
	render() {
		return (
			<Consumer>
				{
					({pathname}) => {
						console.log(pathname);
						const children = this.props.children;
						let res = children[children.length - 1] || null;// 默认最后一个Redirect组件
						for (let i = 0; i < children.length; i++) {
							const child = children[i];
							console.log("child", child);
							let {path} = child.props;
							if (path) {// Redirect组件没有path属性
								// Switch不对路由进行精准匹配，在Router中进行精准匹配
								// /user/:id/:name
								if (path.indexOf("/:") !== -1) {
									path = path.split("/:")[0];
								}
								const regexp = pathToRegExp(path, [], {end: false});
								if (pathname.match(regexp)) {
									res = child;
									break;
								}
							}
						}
						return res;
					}
				}
			</Consumer>
		);
	}

}

export default Comp;