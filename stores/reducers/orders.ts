import { ADD_ORDER, FETCH_ORDER } from "../actions/orders";
import Order from "../../models/order";
import {
    CartItems,
    ReducerParams,
    ReducerParams2,
    OrderState,
} from "../../types";

const initialState: OrderState = {
    orders: [],
};

interface OrderType {
    orderData: {
        items: CartItems;
        amount: number;
    };
}

export default (
    state = initialState,
    action: ReducerParams2<OrderType | { orders: Order[] }>
) => {
    switch (action.type) {
        case FETCH_ORDER:
            if ("orders" in action) {
                return { ...state, orders: action.orders };
            }
        case ADD_ORDER:
            if ("orderData" in action) {
                const newOrder = new Order(
                    new Date().toString(),
                    action.orderData.items,
                    action.orderData.amount,
                    new Date()
                );
                return {
                    ...state,
                    orders: state.orders.concat(newOrder),
                };
            }
        default:
            return state;
    }

    return state;
};
