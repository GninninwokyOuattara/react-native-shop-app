import {
    ADD_TO_CART,
    CLEAR_CART,
    removeFromCart,
    REMOVE_FROM_CART,
} from "../actions/cart";
import CartItem from "../../models/cart-item";
import { ReducerParams } from "../../types";
import Product from "../../models/product";
import { CartState } from "../../types";

const initialState: CartState = {
    items: {},
    totalAmount: 0,
};

export default (
    state = initialState,
    action: ReducerParams<Product | string>
) => {
    switch (action.type) {
        case ADD_TO_CART:
            const productToAdd = action.product as Product;
            let isInCart = !!state.items[productToAdd.id];
            if (!isInCart) {
                return {
                    items: {
                        ...state.items,
                        [productToAdd.id]: new CartItem(
                            1,
                            productToAdd.price,
                            productToAdd.title,
                            productToAdd.price
                        ),
                    },
                    totalAmount: state.totalAmount + productToAdd.price,
                };
            }

            return {
                items: {
                    ...state.items,
                    [productToAdd.id]: {
                        ...state.items[productToAdd.id],
                        quantity: state.items[productToAdd.id].quantity + 1,
                        sum:
                            state.items[productToAdd.id].sum +
                            productToAdd.price,
                    },
                },
                totalAmount: state.totalAmount + productToAdd.price,
            };

        case REMOVE_FROM_CART:
            const productId = action.productId as string;
            let newItems = state.items;
            const itemToDelete = state.items[productId];
            delete newItems[productId];
            return {
                items: newItems,
                totalAmount:
                    state.totalAmount -
                    itemToDelete.quantity * itemToDelete.productPrice,
            };
        case CLEAR_CART:
            return {
                ...state,
                items: {},
                totalAmount: 0,
            };
        default:
            return state;
    }
};
