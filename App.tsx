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

enableScreens();

export default function App() {
    return (
        <SafeAreaProvider>
            <StatusBar style="dark" />
            <NavigationContainer>
                <AppDrawer />
            </NavigationContainer>
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
