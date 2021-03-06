import React, { useReducer, useState, useCallback, useEffect } from "react";
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Button,
    ActivityIndicator,
} from "react-native";
import { useDispatch } from "react-redux";
import { signIn, signUp, autoRelog } from "../stores/actions/auth";

const formReducer = (
    state: {
        email: string;
        password: string;
        formType: "Login" | "Sign up";
    },
    action: any
) => {
    switch (action.type) {
        case "UPDATE":
            return {
                ...state,
                [Object.keys(action)[1]]: action[Object.keys(action)[1]],
            };

        case "SWITCH":
            return {
                ...state,
                email: "",
                password: "",
                formType: action.formType,
            };
        case "SEND_REQUEST":

        default:
            return state;
    }
};

interface props {
    setIsLoggedIn: (x: boolean) => void;
}

const AuthScreen: React.FC<any> = (props) => {
    const dispatch = useDispatch();
    const [state, dispatchForm] = useReducer(formReducer, {
        email: "",
        password: "",
        formType: "Login",
    });
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const relog = async () => {
            try {
                await dispatch(autoRelog());
            } catch (error) {
                console.log(error.message);
            }
        };
        relog();
    }, []);

    const signHandler = useCallback(async () => {
        setIsLoading(true);
        let response: any;
        try {
            if (state.formType === "Login") {
                response = await dispatch(signIn(state.email, state.password));
            } else {
                response = await dispatch(signUp(state.email, state.password));
            }
        } catch (error) {
            setIsLoading(false);
            console.log("Error", error);
        }
    }, [state.email, state.password, state.formType]);

    return (
        <View style={styles.screen}>
            <View style={[styles.container, styles.shadowProp]}>
                <View>
                    <View style={styles.inputContainer}>
                        <Text style={styles.inputTitle}>Email</Text>
                        <TextInput
                            style={styles.inputField}
                            value={state.email}
                            onChangeText={(value) => {
                                dispatchForm({
                                    type: "UPDATE",
                                    email: value,
                                });
                            }}
                        />
                    </View>
                    <View>
                        <Text style={styles.inputTitle}>Password</Text>
                        <TextInput
                            style={styles.inputField}
                            textContentType={"password"}
                            secureTextEntry={true}
                            value={state.password}
                            onChangeText={(value) =>
                                dispatchForm({
                                    type: "UPDATE",
                                    password: value,
                                })
                            }
                        />
                    </View>
                </View>
                {isLoading && <ActivityIndicator size="large" />}
                {!isLoading && (
                    <>
                        <Button
                            title={`${
                                state.formType === "Login" ? "Login" : "Sign Up"
                            }`}
                            onPress={() => signHandler()}
                        />
                        <Button
                            title={`Switch to ${
                                state.formType === "Login" ? "Sign Up" : "Login"
                            }`}
                            onPress={() =>
                                dispatchForm({
                                    type: "SWITCH",
                                    formType:
                                        state.formType === "Login"
                                            ? "Sign Up"
                                            : "Login",
                                })
                            }
                        />
                    </>
                )}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    container: {
        width: "90%",
        height: 300,
        borderWidth: 1,
        paddingHorizontal: 20,
        paddingVertical: 10,
        flexDirection: "column",
        justifyContent: "space-evenly",
    },
    inputContainer: {
        marginVertical: 10,
    },
    shadowProp: {
        backgroundColor: "white",
        borderRadius: 10,
        shadowColor: "#000000",
        shadowOpacity: 0.8,
        shadowRadius: 4,
        shadowOffset: {
            height: 2,
            width: 0,
        },
    },
    inputTitle: {
        fontWeight: "600",
        fontSize: 15,
    },
    inputField: {
        borderBottomWidth: 1,
        borderBottomColor: "#CCC",
        height: 40,
        fontSize: 15,
    },
    buttonsContainer: {
        // flex: 1,
        borderWidth: 1,
    },
});

export default AuthScreen;
