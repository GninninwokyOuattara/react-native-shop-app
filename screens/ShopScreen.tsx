import React from "react";
import { View, Text, FlatList } from "react-native";
import { Item } from "react-navigation-header-buttons";
import { useSelector } from "react-redux";
import ProductList from "../components/ProductList";
import Product from "../models/product";
import { RootState } from "../types";

const renderItem: React.FC<{ item: Product }> = ({ item }) => {
    return <Text>{item.title}</Text>;
};

const HomeScreen = (props: any) => {
    const shopProducts = useSelector(
        (state: RootState) => state.products.availableProducts
    );

    return (
        <View
            style={{
                flex: 1,
            }}
        >
            <ProductList data={shopProducts} navigation={props.navigation} />
        </View>
    );
};

export default HomeScreen;
