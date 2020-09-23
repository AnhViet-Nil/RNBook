import { SAVE_INFO_USER, REMOVE_INFO_USER } from 'redux/actions/types';

const initialState = {
	infoUser: {
		id: null,
		email: null,
		avatar: null,
		name: null,
	},
};

function Auth(state = initialState, action) {
	switch (action.type) {
		case SAVE_INFO_USER:
			return {
				infoUser: {
					id: action.id,
					email: action.email,
					avatar: action.avatar,
					name: action.name,
				},
			};
		case REMOVE_INFO_USER:
			return {
				infoUser: {
					id: null,
					email: null,
					avatar: null,
					name: null,
				},
			};
		default:
			return state;
	}
}

export default Auth;
