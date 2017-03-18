import React, { Component } from 'react';
import { Link } from 'react-router';
import BlogList from './blog_list';

export default class BlogsIndex extends Component {
	render() {
		return (
			<div className="container">
				<div className="row">
					<Link className="col-md-1" to="/blog/new" className="btn btn-primary">Add a Blog</Link>
				</div>
				<br />
				<div className="row">
					<BlogList />
				</div>
			</div>
		);
	}
}