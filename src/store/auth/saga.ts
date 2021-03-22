import { call, takeLatest, put } from 'typed-redux-saga';
import { VERIFY_USER, REGISTER, LOGIN, LOGIN_ASYNC } from './action-types';
import { createTables, getData, actionObject, encryptPassword, insertData, validatePassword } from '../../utils';

function* verifyUserAsync() {
    try {
        yield call(createTables);
        let user = yield call(getData, 'users');
        if (!user.length) yield put(actionObject(REGISTER, { username: 'admin', password: 'admin123', confirm_password: 'admin123' }));
    } catch (error) {
        console.log(error);
    }

}

function* registerUserAsync({ payload }: any) {
    try {

        const data = payload;

        if (data.password !== data.confirm_password) throw new Error("Contrasena no coincide");

        const encryptedPassword = yield call(encryptPassword, data.password);

        const saveData = { username: data.username, password: encryptedPassword };

        yield call(insertData, 'users', saveData);

    } catch (error) {
        console.log(error);
    }
}

function* loginUserAsync({ payload }: any) {
    try {

        const data = payload;

        let user = yield call(getData, 'users', { username: ['=', data.username] });

        const auth = yield call(validatePassword, data.password, user[0].password);

        const authOptions = { isAuth: auth, username: data.username }

        yield put(actionObject(LOGIN_ASYNC, authOptions));

    } catch (error) {
        console.log(error);
    }
}

export function* watchVerifyUser() {
    yield takeLatest(VERIFY_USER, verifyUserAsync);
}

export function* watchRegisterUser() {
    yield takeLatest(REGISTER, registerUserAsync);
}

export function* watchLoginUser() {
    yield takeLatest(LOGIN, loginUserAsync);
}