import PRODUCTS from "../../data/dummy-data";
import { ReducerParams, InitialStoreState } from "../../types";
import { deleteProduct, DELETE_PRODUCT } from "../actions/products";

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

        default:
            return state;
    }
    return state;
};
