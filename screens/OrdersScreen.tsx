import React, { useEffect } from "react";
import { View, Text, ActivityIndicator } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import OrderList from "../components/OrderList";
import { RootState } from "../types";
import { fetchOrder } from "../stores/actions/orders";
import { DrawerOptions, ScreenDrawerNavigationProp } from "../types";
import useLoad from "../hooks/useLoad";

const OrdersScreen: React.FC<ScreenDrawerNavigationProp<DrawerOptions>> = (
    props
) => {
    const dispatch = useDispatch();
    const { orders } = useSelector((state: RootState) => state.orders);
    const { localId } = useSelector((state: RootState) => state.auth);
    const { isError, isLoading, loadOrders } = useLoad(localId);

    useEffect(() => {
        const unsubFocus = props.navigation.addListener("focus", loadOrders);

        return unsubFocus;
    }, []);

    if (isLoading) {
        return (
            <View
                style={{
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <ActivityIndicator />
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
