import { SIGNIN, SIGNUP } from "../actions/auth";

interface AuthState {
    kind: string;
    idToken: string;
    email: string;
    refreshToken: string;
    expiresIn: string;
    localId: string;
}

const authState: AuthState = {
    kind: "",
    idToken: "",
    email: "",
    refreshToken: "",
    expiresIn: "",
    localId: "",
};

export default (state = authState, action: any) => {
    switch (action.type) {
        case SIGNIN:
            return { ...state, ...action.data };
        case SIGNUP:
            console.log({ ...action.data });
            return state;
        default:
            return state;
    }
};
