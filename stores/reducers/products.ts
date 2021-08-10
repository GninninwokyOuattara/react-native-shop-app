import PRODUCTS from "../../data/dummy-data";
import { Action, InitialStoreState } from "../../types";

const initialState: InitialStoreState = {
    availableProducts: PRODUCTS,
    userProducts: PRODUCTS.filter((prod) => prod.ownerId === "u1"),
};

export default (state = initialState, action: Action) => {
    return state;
};
