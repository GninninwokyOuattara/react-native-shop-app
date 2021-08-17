import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { enableScreens } from "react-native-screens";
import AppLoading from "expo-app-loading";
import { SafeAreaProvider } from "react-native-safe-area-context";
import AuthScreen from "./screens/AuthScreen";
import { AuthScreenNavigator } from "./navigators/AuthNavigator";

import * as Font from "expo-font";
import AppStacks from "./navigators/ShopStackNavigator";
import AppDrawer from "./navigators/AppDrawer";

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
    orders: orderReducer,
    auth: authReducer,
});

export const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

export default function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <SafeAreaProvider>
            <StatusBar style="dark" />
            <Provider store={store}>
                <NavigationContainer>
                    {isLoggedIn ? (
                        <AppDrawer />
                    ) : (
                        <AuthScreenNavigator setIsLoggedIn={setIsLoggedIn} />
                    )}
                </NavigationContainer>
            </Provider>
        </SafeAreaProvider>
        // <SafeAreaProvider>
        //     <Provider store={store}>
        //         <StatusBar style="dark" />
        //         <NavigationContainer>
        //             <AuthScreenNavigator />
        //         </NavigationContainer>
        //     </Provider>
        //     {/* <AuthScreen /> */}
        // </SafeAreaProvider>
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
