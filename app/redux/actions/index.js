// All the action files which are using around redux goes here.

import { SAVE_TOKEN, REMOVE_TOKEN } from './types';

const saveToken = (token) => ({ type: SAVE_TOKEN, token });
const removeToken = () => ({ type: REMOVE_TOKEN });

export { saveToken, removeToken };
