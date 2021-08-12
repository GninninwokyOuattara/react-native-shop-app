import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import { RootState } from "../types";
import ProductList from "../components/ProductList";

const ManageProductsScreen = (props: any) => {
    const userProducts = useSelector(
        (state: RootState) => state.products.userProducts
    );

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
