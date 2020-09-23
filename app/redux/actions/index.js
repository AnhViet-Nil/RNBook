// All the action files which are using around redux goes here.

import { SAVE_INFO_USER, REMOVE_INFO_USER } from './types';

const saveInfoUser = (id, email, avatar, name) => ({
	type: SAVE_INFO_USER,
	id,
	email,
	avatar,
	name,
});
const removeInfoUser = () => ({ type: REMOVE_INFO_USER });

export { saveInfoUser, removeInfoUser };
