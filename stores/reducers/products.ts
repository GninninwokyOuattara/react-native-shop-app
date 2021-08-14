import PRODUCTS from "../../data/dummy-data";
import { ReducerParams, InitialStoreState } from "../../types";
import {
    DELETE_PRODUCT,
    ADD_PRODUCT,
    UPDATE_PRODUCT,
} from "../actions/products";

const initialState: InitialStoreState = {
    availableProducts: PRODUCTS,
    userProducts: PRODUCTS.filter((prod) => prod.ownerId === "u1"),
};

export default (state = initialState, action: ReducerParams<any>) => {
    switch (action.type) {
        case DELETE_PRODUCT:
            const newProduct = state.availableProducts.filter(
                (product) => product.id !== action.productId
            );
            return {
                ...state,
                availableProducts: newProduct,
                userProducts: newProduct.filter(
                    (prod) => prod.ownerId === "u1"
                ),
            };
        case ADD_PRODUCT:
            const newAvailableProduct = [
                ...state.availableProducts,
                action.product,
            ];
            return {
                ...state,
                availableProducts: newAvailableProduct,
                userProducts: newAvailableProduct.filter(
                    (prod) => prod.ownerId === "u1"
                ),
            };

        case UPDATE_PRODUCT:
            const productIndex = state.availableProducts.findIndex(
                (prod) => prod.id == action.product.id
            );
            const newAvailable = [...state.availableProducts];
            newAvailable[productIndex] = action.product;
            return {
                ...state,
                availableProducts: newAvailable,
                userProducts: newAvailable.filter(
                    (prod) => prod.ownerId === "u1"
                ),
            };
        default:
            return state;
    }
    return state;
};
