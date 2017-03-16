import React, { Component } from 'react';
import { Link } from 'react-router';
import BlogList from './blog_list';

export default class BlogsIndex extends Component {
	render() {
		return (
			<div>
				<div>
					<Link to="/blog/new">Add a Blog</Link>
				</div>
				<BlogList />
			</div>
		);
	}
}