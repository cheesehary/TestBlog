import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router';
import { bindActionCreators } from 'redux';
import create from '../actions/create';

class BlogsForm extends Component {
	render() {
		const { handleSubmit } = this.props;

		return (
			<form onSubmit={handleSubmit}>
				<h3>Create a New Blog</h3>
				<div>
					<label>Title</label>
					<Field name="title" component="input" type="text" />
				</div>
				<div>
					<label>Author</label>
					<Field name="author" component="input" type="text" />
				</div>
				<div>
					<label>Content</label>
					<Field name="content" component="textarea" />
				</div>
				<button type="submit">Submit</button>
			</form>
		);
	}
}

// export default connect(null, { create })(BlogsForm);

export default reduxForm({
	form: 'BlogsNewForm',
})(BlogsForm);