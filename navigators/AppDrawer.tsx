import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { View, Text, Button } from "react-native";
import ShopStackNavigator from "./ShopStackNavigator";
import OrdersScreen from "../screens/OrdersScreen";
import ManageProductsScreen from "../screens/ManageProductsScreen";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/CustomHeaderButton";
import { ManageProductsNavigator } from "./ShopStackNavigator";
import Icon from "@expo/vector-icons/Ionicons";

const Drawer = createDrawerNavigator();

const AppDrawer = () => {
    return (
        <Drawer.Navigator
            initialRouteName="Home"
            screenOptions={{
                headerShown: false,
            }}
        >
            <Drawer.Screen
                name="Home"
                component={ShopStackNavigator}
                options={(props) => ({
                    drawerIcon: () => <Icon name="ios-home" size={20} />,
                })}
            />
            <Drawer.Screen
                name="Orders"
                component={OrdersScreen}
                options={(props) => ({
                    drawerIcon: () => <Icon name="ios-list" size={20} />,
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
                component={ManageProductsNavigator}
                options={(props) => ({
                    drawerIcon: () => <Icon name="ios-folder-open" size={20} />,
                })}
            />
        </Drawer.Navigator>
    );
};

export default AppDrawer;
