import { ADD_ORDER } from "../actions/orders";
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

export default (state = initialState, action: ReducerParams2<OrderType>) => {
    switch (action.type) {
        case ADD_ORDER:
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
        // return {
        //   orders : {...state.orders, newOrder}
        // }
    }

    return state;
};
