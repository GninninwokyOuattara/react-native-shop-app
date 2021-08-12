import { store } from "./App";
import CartItem from "./models/cart-item";
import Product from "./models/product";

export type RootState = ReturnType<typeof store.getState>;

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

export interface CartState {
    items: {
        [key: string]: CartItem;
    };
    totalAmount: number;
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
