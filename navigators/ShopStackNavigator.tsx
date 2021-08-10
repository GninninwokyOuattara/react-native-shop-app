import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { View, Text } from "react-native";
import HomeScreen from "../screens/ShopScreen";
import CartScreen from "../screens/CartScreen";
import DetailsScreen from "../screens/DetailsScreen";

const Stack = createNativeStackNavigator();

const ShopStackNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName="Shop"
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="Shop" component={HomeScreen} />
            <Stack.Screen name="Cart" component={CartScreen} />
            <Stack.Screen name="Details" component={DetailsScreen} />
        </Stack.Navigator>
    );
};

export default ShopStackNavigator;
