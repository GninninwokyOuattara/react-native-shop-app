import axios from "axios";

export const SIGNIN = "SIGNIN";

export const SIGNUP = "SIGNUP";

export const signIn = (email: string, password: string) => {
    return async (dispatch: any) => {
        try {
            const response = await axios.post(
                "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCLFYp_YwZ-3kVYaS7zh7S5KOsJd53e0wc",
                { email: email, password: password, returnSecureToken: true }
            );

            if (response.status === 200) {
                dispatch({
                    type: SIGNIN,
                    data: response.data,
                });
            } else {
                throw new Error("Unexpected Error");
            }
        } catch (error) {
            throw error.response.data.error.message;
        }
    };
};
export const signUp = (email: string, password: string) => {
    return async (dispatch: any) => {
        try {
            const response = await axios.post(
                "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCLFYp_YwZ-3kVYaS7zh7S5KOsJd53e0wc",
                { email: email, password: password, returnSecureToken: true }
            );

            if (response.status === 200) {
                dispatch({
                    type: SIGNUP,
                    data: response.data,
                });
            } else {
                throw new Error("Unexpected Error");
            }
        } catch (error) {
            throw error.response.data.error.message;
        }
    };
};
