import { all, fork } from 'redux-saga/effects';

import watchGetUsersSaga from './users';

export default function* root() {
  yield all([
    fork(watchGetUsersSaga)
  ]);
}
