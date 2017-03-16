import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import BlogsForm from './blogs_form';
import create from '../actions/create';

class BlogsNew extends Component {
	contextTypes: {
		router: React.PropTypes.object
	}

	handleSubmit = (values) => {
		console.log(values);
		this.props.create(values);
	}

	render() {
		return (
			<div>
				<div>
					<Link to="/">Back to Blogs</Link>
				</div>
				<BlogsForm onSubmit={this.handleSubmit} />
			</div>
		)
	}
}

export default connect(null, { create })(BlogsNew);