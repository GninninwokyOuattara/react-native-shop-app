import { store } from "./App";
import Product from "./models/product";

export type RootState = ReturnType<typeof store.getState>;

export type Action = { [key: string]: string };

export interface InitialStoreState {
    availableProducts: Product[];
    userProducts: Product[];
}
