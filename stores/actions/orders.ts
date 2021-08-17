import axios from "axios";
import Order from "../../models/order";
import { CartItems } from "../../types";

export const ADD_ORDER = "ADD_ORDER";
export const FETCH_ORDER = "FETCH_ORDER";

// export const addOrder = (cartItems: CartItems, totalAmount: number) => {
//     return {
//         type: ADD_ORDER,
//         orderData: { items: cartItems, amount: totalAmount },
//     };
// };
export const addOrder = (cartItems: CartItems, totalAmount: number) => {
    return async (dispatch: any) => {
        try {
            const newOrder = new Order(
                new Date().toString(),
                cartItems,
                totalAmount,
                new Date()
            );
            const response = await axios.post(
                "https://react-native-test-4f012-default-rtdb.firebaseio.com/orders/u1.json",

                { cartItems, totalAmount, date: new Date() }
            );

            if (response.status === 200) {
                dispatch({
                    type: ADD_ORDER,
                    orderData: { items: cartItems, amount: totalAmount },
                });
            } else {
                throw new Error("An unexpected error occured");
            }
        } catch (error) {
            throw error.message;
        }
    };
};

export const fetchOrder = () => {
    return async (dispatch: any) => {
        try {
            const response = await axios.get(
                "https://react-native-test-4f012-default-rtdb.firebaseio.com/orders/u1.json"
            );
            if (response.status !== 200) {
                throw new Error("Unexpected Error");
            }

            const ordersData = response.data;
            let orders: Order[] = [];
            for (let key in ordersData) {
                let orderData = ordersData[key];
                for (let key in orderData.cartItems) {
                    const items = orderData.cartItems[key];
                    orderData = { ...orderData, cartItems: items };
                }
                orders = [
                    ...orders,
                    new Order(
                        key,
                        orderData.cartItems,
                        orderData.totalAmount,
                        orderData.date
                    ),
                ];
            }
            dispatch({
                type: FETCH_ORDER,
                orders,
            });
        } catch (error) {
            console.log(error.message);
        }
    };
};

// export const fetchOrder = () => {
//     return (dispatch: any) => {
//         dispatch({
//             type: "TETE",
//             data: "TETEH",
//         });
//     };
// };
