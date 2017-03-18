import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router';
import { bindActionCreators } from 'redux';
import create from '../actions/create';

class BlogsForm extends Component {
	render() {
		const { handleSubmit } = this.props;

		return (
			<form className="form-horizontal" onSubmit={handleSubmit}>
				<h3 className="col-md-offset-2">Create a New Blog</h3>
				<div className="form-group">
					<label className="col-md-1 control-label">Title</label>
					<div className="col-md-5">
						<Field className="form-control" name="title" component="input" type="text" />
					</div>
				</div>
				<div className="form-group">
					<label className="col-md-1 control-label">Author</label>
					<div className="col-md-5">
						<Field className="form-control" name="author" component="input" type="text" />
					</div>
				</div>
				<div className="form-group">
					<label className="col-md-1 control-label">Content</label>
					<div className="col-md-5">
						<Field className="form-control" name="content" component="textarea" />
					</div>
				</div>
				<button className="col-md-offset-1 btn btn-primary" type="submit">Submit</button>
			</form>
		);
	}
}

// export default connect(null, { create })(BlogsForm);

export default reduxForm({
	form: 'BlogsNewForm',
})(BlogsForm);