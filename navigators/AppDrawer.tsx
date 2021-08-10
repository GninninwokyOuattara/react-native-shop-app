import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { View, Text, Button } from "react-native";
import ShopStackNavigator from "./ShopStackNavigator";
import OrdersScreen from "../screens/OrdersScreen";
import ManageProductsScreen from "../screens/ManageProductsScreen";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/CustomHeaderButton";

const Drawer = createDrawerNavigator();

const AppDrawer = () => {
    return (
        <Drawer.Navigator
            initialRouteName="Home"
            screenOptions={{
                headerShown: false,
            }}
        >
            <Drawer.Screen name="Home" component={ShopStackNavigator} />
            <Drawer.Screen
                name="Orders"
                component={OrdersScreen}
                options={(props) => ({
                    headerLeft: () => {
                        return (
                            <HeaderButtons
                                HeaderButtonComponent={CustomHeaderButton}
                            >
                                <Item
                                    title="cart"
                                    iconName="ios-menu"
                                    onPress={() =>
                                        props.navigation.toggleDrawer()
                                    }
                                />
                            </HeaderButtons>
                        );
                    },
                    headerShown: true,
                })}
            />
            <Drawer.Screen
                name="Manage Products"
                component={ManageProductsScreen}
                options={(props) => ({
                    headerLeft: () => {
                        return (
                            <HeaderButtons
                                HeaderButtonComponent={CustomHeaderButton}
                            >
                                <Item
                                    title="cart"
                                    iconName="ios-menu"
                                    onPress={() =>
                                        props.navigation.toggleDrawer()
                                    }
                                />
                            </HeaderButtons>
                        );
                    },
                    headerShown: true,
                })}
            />
        </Drawer.Navigator>
    );
};

export default AppDrawer;
