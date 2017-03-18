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
			<Link className="list-group-item" to="/blog/content" onClick={this.onBlogClick}>
				<h4 className="list-group-item-heading">{this.props.title}</h4>
				<p className="list-group-item-text">{this.props.author}, {this.props.time}</p>
			</Link>
		);
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ queryOne }, dispatch);
}

export default connect(null, mapDispatchToProps)(BlogItem);