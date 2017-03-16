import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/app';
import BlogsIndex from './components/blogs_index';
import BlogsNew from './components/blogs_new';
import BlogsContent from './components/blogs_content';

export default (
	<Route path="/" component={App}>
		<IndexRoute component={BlogsIndex} />
		<Route path="blog/new" component={BlogsNew} />
		<Route path="blog/content" component={BlogsContent} />
	</Route>
);
