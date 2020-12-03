import { put, takeLatest } from 'redux-saga/effects';

import { SET_USER_AUTH_SAGA } from '../constant';
import { setUsers } from '../actions';

function* workerGetUsersSaga({ payload }) {
  yield put(setUsers(payload));
}

export default function* watchGetUsersSaga() {
  yield takeLatest(SET_USER_AUTH_SAGA, workerGetUsersSaga);
}
