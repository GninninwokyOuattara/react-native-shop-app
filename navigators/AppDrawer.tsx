import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { View, Text } from "react-native";
import ShopStackNavigator from "./ShopStackNavigator";
import OrdersScreen from "../screens/OrdersScreen";
import ManageProductsScreen from "../screens/ManageProductsScreen";

const Drawer = createDrawerNavigator();

const AppDrawer = () => {
    return (
        <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen name="Home" component={ShopStackNavigator} />
            <Drawer.Screen name="Orders" component={OrdersScreen} />
            <Drawer.Screen
                name="Manage Products"
                component={ManageProductsScreen}
            />
        </Drawer.Navigator>
    );
};

export default AppDrawer;
