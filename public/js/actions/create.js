import axios from 'axios';
import { browserHistory } from 'react-router';

export default function(values) {
	var req = axios.post('/blogs/create', values);
	req.then(function() {
		browserHistory.push('/');
	});

	return {
		type: 'create',
		payload: req
	};
}