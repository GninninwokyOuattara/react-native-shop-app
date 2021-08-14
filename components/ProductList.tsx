import React from "react";
import { View, Text, FlatList } from "react-native";
import Product from "../models/product";
import { RenderItemFunc } from "../types";
import ProductItem from "./ProductItem";
import { PropsWithNavigation } from "../types";

interface UserProduct {
    userProduct?: boolean;
}

const ProductList: React.FC<PropsWithNavigation<Product[]> & UserProduct> = (
    props
) => {
    const renderProductItem: RenderItemFunc<Product> = ({ item }) => {
        return (
            <ProductItem
                userProduct={props.userProduct}
                product={item}
                navigation={props.navigation}
                onSelectProduct={() =>
                    props.navigation.navigate("Details", {
                        productId: item.id,
                    })
                }
            />
        );
    };

    return <FlatList data={props.data} renderItem={renderProductItem} />;
};

export default ProductList;
