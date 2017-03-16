import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { queryOne } from '../actions/query';

class BlogItem extends Component {
	constructor(props) {
		super(props);
		this.onBlogClick = this.onBlogClick.bind(this);
	}

	onBlogClick() {
		this.props.queryOne(this.props.number);
	}

	render() {
		return (
			<div>
				<Link to="/blog/content">
					<div onClick={this.onBlogClick}>{this.props.title}/{this.props.author}/{this.props.time}</div>
				</Link>
			</div>
		);
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ queryOne }, dispatch);
}

export default connect(null, mapDispatchToProps)(BlogItem);