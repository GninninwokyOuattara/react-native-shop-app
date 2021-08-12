import { store } from "./App";
import CartItem from "./models/cart-item";
import Order from "./models/order";
import Product from "./models/product";

export type RootState = ReturnType<typeof store.getState>;

interface ReducerType {
    type: string;
}

export type ReducerParams<T> = ReducerType & {
    [key: string]: T;
};

export type ReducerParams2<T> = ReducerType & T;

export interface InitialStoreState {
    availableProducts: Product[];
    userProducts: Product[];
}

export interface CartItems {
    [key: string]: CartItem;
}
export interface CartState {
    items: CartItems;
    totalAmount: number;
}

export interface OrderState {
    orders: Order[];
}

export type RenderItemFunc<T> = (itemData: { item: T }) => JSX.Element;

export interface Props<T> {
    [key: string]: T;
}

export interface NavigationProp {
    navigation: any;
}

export interface NavigationPropWithRoute extends NavigationProp {
    route: any;
}

export interface PropsWithNavigation<T> extends NavigationProp {
    data: T;
}
