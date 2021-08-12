import React from "react";
import { View, Text, FlatList } from "react-native";
import CartItem from "../models/cart-item";
import { CartState, PropsWithNavigation, RenderItemFunc } from "../types";
import CartElement from "./CartElement";

interface Items {
    [key: string]: CartItem;
}

const CartList: React.FC<PropsWithNavigation<CartState>> = (props) => {
    const { items } = props.data;
    const renderFunction: RenderItemFunc<string> = ({ item }) => {
        return <CartElement {...items[item]} productId={item} />;
    };

    return (
        <FlatList
            data={Object.keys(items)}
            renderItem={renderFunction}
            keyExtractor={(index) => index.toString()}
        />
    );
};

export default CartList;