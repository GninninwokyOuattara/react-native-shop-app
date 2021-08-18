import { SIGNIN, SIGNUP } from "../actions/auth";
import { AuthState, ReducerParams2 } from "../../types";

const authState: AuthState = {
    kind: "",
    idToken: "",
    email: "",
    refreshToken: "",
    expiresIn: "",
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
        default:
            return state;
    }
};
