import React, { useEffect } from "react";
import { View, Text } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import OrderList from "../components/OrderList";
import { RootState } from "../types";
import { fetchOrder } from "../stores/actions/orders";
import { DrawerOptions, ScreenDrawerNavigationProp } from "../types";

const OrdersScreen: React.FC<ScreenDrawerNavigationProp<DrawerOptions>> = (
    props
) => {
    const dispatch = useDispatch();
    const { orders } = useSelector((state: RootState) => state.orders);

    useEffect(() => {
        const unsubFocus = props.navigation.addListener(
            "focus",
            dispatch(fetchOrder)
        );
        return unsubFocus;
    }, []);

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
