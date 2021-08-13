import React from "react";
import { View, Text, FlatList } from "react-native";
import Order from "../models/order";
import { Props, RenderItemFunc } from "../types";
import OrderItem from "./OrderItem";

const OrderList: React.FC<{ orders: Order[] }> = (props) => {
    const renderOrder: RenderItemFunc<Order> = ({ item }) => {
        return <OrderItem {...item} getReadableDate={item.getReadableDate} />;
    };

    return <FlatList data={props.orders} renderItem={renderOrder} />;
};

export default OrderList;
