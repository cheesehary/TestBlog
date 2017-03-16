import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import BlogItem from './blog_item';
import { queryAll } from '../actions/query';

class BlogList extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		this.props.queryAll();
	}

	render() {
		const blogItems = this.props.blogs.map((blog) => {
			return <BlogItem key={blog.number} number={blog.number} title={blog.title} author={blog.author} time={blog.time} />
		});
		return (
			<ul>{blogItems}</ul>
		);
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ queryAll }, dispatch);
}

function mapStateToProps(state) {
	return {blogs: state.blogs};
}

export default connect(mapStateToProps, mapDispatchToProps)(BlogList);