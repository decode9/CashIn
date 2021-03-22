import { all, fork } from 'redux-saga/effects';
import { watchLoginUser, watchRegisterUser, watchVerifyUser } from './auth/saga';

export default function* () {
  yield all([
    fork(watchVerifyUser),
    fork(watchLoginUser),
    fork(watchRegisterUser)
  ]);
}
