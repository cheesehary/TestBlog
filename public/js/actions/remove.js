import axios from 'axios';
import { browserHistory } from 'react-router';

export default function(num) {
	var req = axios.get(`/blogs/delete/${num}`);
	req.then(function() {
		browserHistory.push('/');
	});

	return {
		type: 'delete',
		payload: req
	};
}