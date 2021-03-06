import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { AuthState } from "../../types";

export const SIGNIN = "SIGNIN";

export const SIGNUP = "SIGNUP";

export const AUTO_RELOG = "AUTO_RELOG";

export const LOGOUT = "LOGOUT";

let timerId: ReturnType<typeof setTimeout>;

export const signIn = (email: string, password: string) => {
    return async (dispatch: any) => {
        try {
            const response = await axios.post(
                "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCLFYp_YwZ-3kVYaS7zh7S5KOsJd53e0wc",
                { email: email, password: password, returnSecureToken: true }
            );

            if (response.status === 200) {
                let data: AuthState = response.data;
                data = {
                    ...data,
                    expiresIn: Date.now() + data.expiresIn * 1000,
                };
                await AsyncStorage.setItem("authData", JSON.stringify(data));
                dispatch({
                    type: SIGNIN,
                    data: data,
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
                let data: AuthState = response.data;
                data = {
                    ...data,
                    expiresIn: Date.now() + data.expiresIn * 1000,
                };
                await AsyncStorage.setItem("authData", JSON.stringify(data));
                dispatch({
                    type: SIGNUP,
                    data: data,
                });
            } else {
                throw new Error("Unexpected Error");
            }
        } catch (error) {
            throw error.response.data.error.message;
        }
    };
};

export const autoRelog = () => {
    return async (dispatch: any) => {
        try {
            let data = await AsyncStorage.getItem("authData");
            if (data) {
                let dataParsed: AuthState = JSON.parse(data) as any;
                const { expiresIn } = dataParsed;
                if (Date.now() < expiresIn) {
                    return dispatch({
                        type: SIGNIN,
                        data: dataParsed,
                    });
                }
                throw new Error("Session expired");
            } else {
                throw new Error("No data found");
            }
        } catch (error) {
            throw error;
        }
    };
};

const clearTimeoutLogout = () => {
    clearTimeout(timerId);
};

export const setLogout = (expirationTime: number) => {
    clearTimeoutLogout();
    return async (dispatch: any) => {
        timerId = setTimeout(() => {
            AsyncStorage.removeItem("authData");
            dispatch({ type: LOGOUT });
        }, expirationTime);
    };
};
