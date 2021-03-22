import { LOGIN_ASYNC, LOGOUT } from './action-types';

const initialState = {
    username: '',
    isAuth: false,
}

export default (state: any = initialState, { type, payload }: any) => {
    switch (type) {
        case LOGIN_ASYNC:
            return { ...state, ...payload };
        case LOGOUT:
            return initialState;
        default:
            return state
    }
}