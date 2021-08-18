import PRODUCTS from "../../data/dummy-data";
import Product from "../../models/product";
import { ReducerParams, InitialStoreState, ReducerParams2 } from "../../types";
import {
    DELETE_PRODUCT,
    ADD_PRODUCT,
    UPDATE_PRODUCT,
    FETCH_PRODUCT,
} from "../actions/products";

const initialState: InitialStoreState = {
    availableProducts: PRODUCTS,
    userProducts: [],
};

export default (
    state = initialState,
    action:
        | ReducerParams2<{ product: Product; userId: string }>
        | ReducerParams2<{ productId: string; userId: string }>
        | ReducerParams2<{ products: typeof PRODUCTS; userId: string }>
) => {
    switch (action.type) {
        case FETCH_PRODUCT:
            if ("products" in action) {
                return {
                    ...state,
                    availableProducts: [...action.products],
                    userProducts: action.products.filter(
                        (prod) => prod.ownerId === action.userId
                    ),
                };
            }
            return state;
        case DELETE_PRODUCT:
            if ("productId" in action) {
                const newProduct = state.availableProducts.filter(
                    (product) => product.id !== action.productId
                );
                return {
                    ...state,
                    availableProducts: newProduct,
                    userProducts: newProduct.filter(
                        (prod) => prod.ownerId === action.userId
                    ),
                };
            }

        case ADD_PRODUCT:
            if ("product" in action) {
                const { product } = action;
                const newAvailableProduct = [
                    ...state.availableProducts,
                    product,
                ];

                return {
                    ...state,
                    availableProducts: newAvailableProduct,
                    userProducts: newAvailableProduct.filter(
                        (prod) => prod.ownerId === action.userId
                    ),
                };
            }

        case UPDATE_PRODUCT:
            if ("product" in action) {
                const productIndex = state.availableProducts.findIndex(
                    (prod) => prod.id == action.product.id
                );
                const newAvailable = [...state.availableProducts];
                newAvailable[productIndex] = action.product;
                return {
                    ...state,
                    availableProducts: newAvailable,
                    userProducts: newAvailable.filter(
                        (prod) => prod.ownerId === action.userId
                    ),
                };
            }

        default:
            return state;
    }
};
