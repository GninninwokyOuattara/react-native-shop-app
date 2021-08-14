import Product from "../../models/product";

export const DELETE_PRODUCT = "DELETE_PRODUCT";
export const ADD_PRODUCT = "ADD_PRODUCT";
export const UPDATE_PRODUCT = "UPDATE_PRODUCT";

export const deleteProduct = (productId: string) => {
    return { type: DELETE_PRODUCT, productId };
};

export const addProduct = (product: Product) => {
    return { type: ADD_PRODUCT, product };
};
export const updateProduct = (product: Product) => {
    return { type: UPDATE_PRODUCT, product };
};
