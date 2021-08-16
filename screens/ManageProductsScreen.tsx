import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import { useSelector } from "react-redux";
import { RootState } from "../types";
import ProductList from "../components/ProductList";
import { ScreenNavigationProps, ManageProductsStack } from "../types";
import useLoad from "../hooks/useLoad";

const ManageProductsScreen: React.FC<
    ScreenNavigationProps<ManageProductsStack>
> = (props) => {
    const { isError, isLoading, load } = useLoad();
    const userProducts = useSelector(
        (state: RootState) => state.products.userProducts
    );

    useEffect(() => {
        const unsubFocus = props.navigation.addListener("focus", load);
        return unsubFocus;
    }, [load]);

    if (isLoading) {
        return (
            <View
                style={{
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <ActivityIndicator size="large" color="blue" />
            </View>
        );
    }

    if (isError) {
        return (
            <View
                style={{
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <Text>{isError}</Text>
            </View>
        );
    }

    if (!userProducts) {
        return (
            <View
                style={{
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <Text>You have no product. Consider adding some ?</Text>
            </View>
        );
    }
    return (
        <View style={{ flex: 1 }}>
            <ProductList
                data={userProducts}
                navigation={props.navigation}
                userProduct
            />
        </View>
    );
};

const styles = StyleSheet.create({});
export default ManageProductsScreen;
