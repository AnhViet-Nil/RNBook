import { all, fork } from 'redux-saga/effects';

import { login } from './auth';

export default function* rootSaga() {
	yield all([fork(login)]);
}
