import Product from "../../models/product";
import axios from "axios";

export const DELETE_PRODUCT = "DELETE_PRODUCT";
export const ADD_PRODUCT = "ADD_PRODUCT";
export const UPDATE_PRODUCT = "UPDATE_PRODUCT";
export const FETCH_PRODUCT = "FETCH_PRODUCT";

// export const deleteProduct = (productId: string) => {
//     return { type: DELETE_PRODUCT, productId };
// };

export const deleteProduct = (productId: string) => {
    return async (dispatch: any): Promise<void | string> => {
        try {
            const response = await axios.delete(
                `https://react-native-test-4f012-default-rtdb.firebaseio.com/products/${productId}.json`
            );

            if (response.status == 200) {
                dispatch({ type: DELETE_PRODUCT, productId });
            }
        } catch (error) {
            throw error.message;
        }
    };
};

export const fetchProduct = () => {
    return async (dispatch: any): Promise<void | string> => {
        try {
            const response = await axios.get(
                "https://react-native-test-4f012-default-rtdb.firebaseio.com/products.json"
            );
            const fetchedData = response.data;
            let loadedProducts: Product[] = [];
            for (const key in fetchedData) {
                const prod: Product = fetchedData[key];
                loadedProducts.push(
                    new Product(
                        key,
                        prod.ownerId,
                        prod.title,
                        prod.imageUrl,
                        prod.description,
                        prod.price
                    )
                );
            }

            dispatch({
                type: FETCH_PRODUCT,
                products: loadedProducts,
            });
        } catch (error) {
            throw error.message;
        }
    };
};

export const addProduct = (product: {
    title: string;
    ownerId: string;
    imageUrl: string;
    description: string;
    price: number;
}) => {
    return async (dispatch: any) => {
        const response = await axios.post(
            "https://react-native-test-4f012-default-rtdb.firebaseio.com/products.json",
            product
        );

        const newProduct = new Product(
            response.data.name,
            "u1",
            product.title,
            product.imageUrl,
            product.description,
            product.price
        );

        dispatch({
            type: ADD_PRODUCT,
            product: newProduct,
        });
    };
};

// export const updateProduct = (product: Product) => {
//     return { type: UPDATE_PRODUCT, product };
// };

export const updateProduct = (product: Product) => {
    return async (dispatch: any): Promise<void | string> => {
        try {
            let updates: Partial<Product> = { ...product };
            delete updates.id;
            const response = await axios.patch(
                `https://react-native-test-4f012-default-rtdb.firebaseio.com/products/${product.id}.json`,
                updates
            );
            if (response.status === 200) {
                dispatch({
                    type: UPDATE_PRODUCT,
                    product,
                });
            }
        } catch (error) {
            throw error.message;
        }
    };
};
