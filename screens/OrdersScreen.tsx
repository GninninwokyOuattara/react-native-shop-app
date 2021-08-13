import React from "react";
import { View, Text } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import OrderList from "../components/OrderList";
import { RootState } from "../types";

const OrdersScreen = () => {
    const { orders } = useSelector((state: RootState) => state.orders);

    if (!orders.length) {
        return (
            <View
                style={{
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <Text>Wow such empty !</Text>
                <Text>Maybe consider ordering something ?</Text>
            </View>
        );
    }

    return <OrderList orders={orders} />;
};

export default OrdersScreen;
