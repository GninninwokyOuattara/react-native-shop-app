import PRODUCTS from "../../data/dummy-data";
import { ReducerParams, InitialStoreState } from "../../types";

const initialState: InitialStoreState = {
    availableProducts: PRODUCTS,
    userProducts: PRODUCTS.filter((prod) => prod.ownerId === "u1"),
};

export default (state = initialState, action: ReducerParams<any>) => {
    return state;
};
