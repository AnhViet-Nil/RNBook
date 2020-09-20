import { SAVE_TOKEN, REMOVE_TOKEN } from 'redux/actions/types';

const initialState = {
	token: null,
};

function Auth(state = initialState, action) {
	switch (action.type) {
		case SAVE_TOKEN:
			return {
				token: action.token,
			};
		case REMOVE_TOKEN:
			return {
				token: null,
			};
		default:
			return state;
	}
}

export default Auth;
