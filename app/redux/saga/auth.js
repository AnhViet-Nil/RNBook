// import {
// 	LOGIN,
// 	LOGIN_STOP,
// 	LOGIN_SUCCESS,
// 	LOGIN_FAILURE,
// } from '../actions/types';
// import { take, takeEvery, put, delay, cancel, fork } from 'redux-saga/effects';

// function* loginAsync() {
// 	try {
// 		yield delay(2000);
// 		yield put({
// 			type: LOGIN_SUCCESS,
// 			data: { token: 'token' },
// 		});
// 		yield put({ type: LOGIN_STOP });
// 	} catch (error) {
// 		yield put({ type: LOGIN_FAILURE });
// 	}
// }

// eslint-disable-next-line import/prefer-default-export
export function* login() {
	// while (yield take(LOGIN)) {
	// 	const login = yield fork(loginAsync);
	// 	yield take(LOGIN_STOP);
	// 	yield cancel(login);
	// }
}
