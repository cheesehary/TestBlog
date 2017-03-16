export default (state = [], action) => {
	switch(action.type) {
		case('all'):
			return action.payload.blogs;
		default:
			return state;
	}
}