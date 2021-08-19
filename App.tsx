import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { enableScreens } from "react-native-screens";
import { SafeAreaProvider } from "react-native-safe-area-context";
import NavContainer from "./navigators/NavContainer";

import { combineReducers, createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import ReduxThunk from "redux-thunk";
import productReducer from "./stores/reducers/products";
import cartReducer from "./stores/reducers/cart";
import orderReducer from "./stores/reducers/orders";
import authReducer from "./stores/reducers/auth";

enableScreens();
export const rootReducer = combineReducers({
    products: productReducer,
    cart: cartReducer,
    auth: authReducer,
    orders: orderReducer,
});

export const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

export default function App() {
    return (
        <SafeAreaProvider>
            <StatusBar style="dark" />
            <Provider store={store}>
                <NavigationContainer>
                    <NavContainer />
                </NavigationContainer>
            </Provider>
        </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
