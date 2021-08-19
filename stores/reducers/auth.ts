import { LOGOUT, SIGNIN, SIGNUP } from "../actions/auth";
import { AuthState, ReducerParams2 } from "../../types";

const authState: AuthState = {
    kind: "",
    idToken: "",
    email: "",
    refreshToken: "",
    expiresIn: 0,
    localId: "",
};

export default (
    state = authState,
    action: ReducerParams2<{ data: AuthState }>
) => {
    switch (action.type) {
        case SIGNIN:
            return { ...state, ...action.data };
        case SIGNUP:
            return { ...state, ...action.data };
        case LOGOUT:
            return { ...state, ...authState };
        default:
            return state;
    }
};
