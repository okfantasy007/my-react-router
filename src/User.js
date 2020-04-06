import React, {Component} from 'react';

class Comp extends Component {
	constructor(props) {
		super(props);

	}

	render() {
		console.log("User", this.props);
		return (
			<div>用户列表</div>
		);
	}

}

export default Comp;