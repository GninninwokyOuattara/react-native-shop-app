import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { enableScreens } from "react-native-screens";
import AppLoading from "expo-app-loading";
import { SafeAreaProvider } from "react-native-safe-area-context";

import * as Font from "expo-font";
import AppStacks from "./navigators/ShopStackNavigator";
import AppDrawer from "./navigators/AppDrawer";

import { combineReducers, createStore } from "redux";
import { Provider } from "react-redux";
import productReducer from "./stores/reducers/products";
import cartReducer from "./stores/reducers/cart";

enableScreens();
export const rootReducer = combineReducers({
    products: productReducer,
    cart: cartReducer,
});

export const store = createStore(rootReducer);

export default function App() {
    return (
        <SafeAreaProvider>
            <StatusBar style="dark" />
            <Provider store={store}>
                <NavigationContainer>
                    <AppDrawer />
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
