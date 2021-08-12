import React from "react";
import { View, Text, FlatList } from "react-native";
import Product from "../models/product";
import { RenderItemFunc } from "../types";
import ProductItem from "./ProductItem";

interface props {
    products: Product[];
    navigation: any;
    userProduct?: boolean;
}

const ProductList: React.FC<props> = (props) => {
    const renderProductItem: RenderItemFunc = ({ item }) => {
        return (
            <ProductItem
                userProduct={props.userProduct}
                product={item}
                onSelectProduct={() =>
                    props.navigation.navigate("Details", {
                        productId: item.id,
                    })
                }
            />
        );
    };

    return <FlatList data={props.products} renderItem={renderProductItem} />;
};

export default ProductList;
