import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { View, Text } from "react-native";
import HomeScreen from "../screens/ShopScreen";
import CartScreen from "../screens/CartScreen";
import DetailsScreen from "../screens/DetailsScreen";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/CustomHeaderButton";
import ManageProductsScreen from "../screens/ManageProductsScreen";
import ProductFormScreen from "../screens/ProductFormScreen";

const Stack = createNativeStackNavigator();

export const ManageProductsNavigator = (props: any) => {
    return (
        <Stack.Navigator initialRouteName="Your Products">
            <Stack.Screen
                name="ManageProducts"
                component={ManageProductsScreen}
                options={(props) => ({
                    title: "Your Products",
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
                    headerRight: () => {
                        return (
                            <HeaderButtons
                                HeaderButtonComponent={CustomHeaderButton}
                            >
                                <Item
                                    title="cart"
                                    iconName="ios-add-circle"
                                    onPress={() =>
                                        props.navigation.navigate("ProductForm")
                                    }
                                />
                            </HeaderButtons>
                        );
                    },
                })}
            />
            <Stack.Screen
                name="ProductForm"
                component={ProductFormScreen}
                options={(props) => ({
                    title: "Awesome Form",
                    headerRight: () => {
                        return (
                            <HeaderButtons
                                HeaderButtonComponent={CustomHeaderButton}
                            >
                                <Item
                                    title="cart"
                                    iconName="ios-checkmark-circle"
                                    onPress={() =>
                                        props.navigation.navigate("ProductForm")
                                    }
                                />
                            </HeaderButtons>
                        );
                    },
                })}
            />
        </Stack.Navigator>
    );
};

const ShopStackNavigator = (props: any) => {
    return (
        <Stack.Navigator
            initialRouteName="Shop"
            screenOptions={{
                headerShown: true,
            }}
        >
            <Stack.Screen
                name="Shop"
                component={HomeScreen}
                options={({ navigation, route }) => ({
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
                    headerRight: () => {
                        return (
                            <HeaderButtons
                                HeaderButtonComponent={CustomHeaderButton}
                            >
                                <Item
                                    title="cart"
                                    iconName="ios-cart"
                                    onPress={() => navigation.navigate("Cart")}
                                />
                            </HeaderButtons>
                        );
                    },
                })}
            />
            <Stack.Screen
                name="Cart"
                component={CartScreen}
                options={{
                    headerTitle: "Cart",
                }}
            />
            <Stack.Screen name="Details" component={DetailsScreen} />
        </Stack.Navigator>
    );
};

export default ShopStackNavigator;
