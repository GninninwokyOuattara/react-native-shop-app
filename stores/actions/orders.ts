import axios from "axios";
import Order from "../../models/order";
import CartItem from "../../models/cart-item";
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

                {
                    ...newOrder,
                }
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
                const { id, date, totalAmount, items } = ordersData[key];
                let itemsObj = {};
                for (let key in items) {
                    const { productPrice, productTitle, quantity, sum } =
                        items[key];
                    const item = new CartItem(
                        quantity,
                        productPrice,
                        productTitle,
                        sum
                    );
                    itemsObj = { ...itemsObj, [key]: item };
                }
                orders = [
                    ...orders,
                    new Order(id, itemsObj, totalAmount, date),
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
