import { store } from "./App";
import CartItem from "./models/cart-item";
import Product from "./models/product";

export type RootState = ReturnType<typeof store.getState>;

// export type Action = { [key: string]: string };
// export type Action<T> = { [key: string] : T , type: string}
interface ReducerType {
    type: string;
}

export type ReducerParams<T> = ReducerType & {
    [key: string]: T;
};

export interface InitialStoreState {
    availableProducts: Product[];
    userProducts: Product[];
}

type CartAmount = { totalAmount: number };
export interface InitialCartState extends CartAmount {
    items: {
        [key: string]: CartItem;
    };
}

export type RenderItemFunc = (itemData: { item: Product }) => JSX.Element;
