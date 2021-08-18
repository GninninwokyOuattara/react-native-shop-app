import { StackNavigationProp } from "@react-navigation/stack";
import { DrawerNavigationProp } from "@react-navigation/drawer";

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

export interface AuthState {
    kind: string;
    idToken: string;
    email: string;
    refreshToken: string;
    expiresIn: string;
    localId: string;
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

export type ManageProductsStack = {
    ManageProducts: undefined;
    ProductForm: undefined;
    Details: undefined;
};

export type ShopStack = {
    Shop: undefined;
    ProductForm: undefined;
};

type NavProp<T extends ShopStack | ManageProductsStack> =
    StackNavigationProp<T>;

export type ScreenNavigationProps<T extends ShopStack | ManageProductsStack> = {
    navigation: NavProp<T>;
};

export type DrawerOptions = {
    Home: undefined;
    Orders: undefined;
};

type DrawerProp<T extends DrawerOptions> = DrawerNavigationProp<T>;

export type ScreenDrawerNavigationProp<T extends DrawerOptions> = {
    navigation: DrawerProp<T>;
};
