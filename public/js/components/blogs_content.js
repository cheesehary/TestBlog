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
			<div className="container">
				<div>
					<Link className="btn btn-primary" to="/">Back to Blogs</Link>
					<button className="col-md-offset-9 btn btn-primary" onClick={this.deleteBlog.bind(this)}>Delete this Blog</button>
				</div>
				<br />
				<div className="panel panel-default">
					<div className="panel-heading">
						<h3 className="panel-title">{this.props.current.title}</h3>
					</div>
					<div className="panel-body">{this.props.current.content}</div>
				</div>
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {current: state.current};
}

export default connect(mapStateToProps, { remove })(BlogsContent);