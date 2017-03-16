import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import remove from '../actions/remove';

class BlogsContent extends Component {
	deleteBlog = () => {
		this.props.remove(this.props.current.number);
	}

	render() {
		return (
			<div>
				<div>
					<Link to="/">Back to Blogs</Link>
					<button onClick={this.deleteBlog.bind(this)}>Delete this Blog</button>
				</div>
				<div>{this.props.current.content}</div>
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {current: state.current};
}

export default connect(mapStateToProps, { remove })(BlogsContent);