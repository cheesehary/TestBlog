export default (state = [], action) => {
	switch(action.type) {
		case('one'):
			return action.payload.blog;
		default:
			return state;
	}
};