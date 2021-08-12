import { CartItems } from "../../types";

export const ADD_ORDER = "ADD_ORDER";

export const addOrder = (cartItems: CartItems, totalAmount: number) => {
    return {
        type: ADD_ORDER,
        orderData: { items: cartItems, amount: totalAmount },
    };
};
