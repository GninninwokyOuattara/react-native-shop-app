import { ADD_TO_CART } from "../actions/cart";
import CartItem from "../../models/cart-item";
import { ReducerParams } from "../../types";
import Product from "../../models/product";
import { InitialCartState } from "../../types";

const initialState: InitialCartState = {
    items: {},
    totalAmount: 0,
};

export default (state = initialState, action: ReducerParams<Product>) => {
    switch (action.type) {
        case ADD_TO_CART:
            const productToAdd = action.product;
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
        default:
            return state;
    }
};
