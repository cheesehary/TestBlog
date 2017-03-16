import axios from 'axios';

export function queryAll() {
	var req = axios.get('/blogs');

	return (dispatch) => {
		req.then(({data}) => {
			dispatch({ type: 'all', payload: data })
		});
	};
}

export function queryOne(number) {
	var req = axios.get(`/blogs/${number}`);

	return (dispatch) => {
		req.then(({data}) => {
			dispatch({ type: 'one', payload: data})
		});
	};
}