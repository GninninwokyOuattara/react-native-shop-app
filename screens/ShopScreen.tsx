import React, { useEffect, useState, useCallback } from "react";
import {
    View,
    Text,
    ActivityIndicator,
    RefreshControl,
    ScrollView,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import ProductList from "../components/ProductList";
import Product from "../models/product";
import { RootState } from "../types";
import { fetchProduct } from "../stores/actions/products";
import { ScreenNavigationProps, ShopStack } from "../types";

const renderItem: React.FC<{ item: Product }> = ({ item }) => {
    return <Text>{item.title}</Text>;
};

const HomeScreen: React.FC<ScreenNavigationProps<ShopStack>> = (props) => {
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState<false | string>(false);
    const [refreshing, setRefreshing] = useState(false);
    const shopProducts = useSelector(
        (state: RootState) => state.products.availableProducts
    );
    const { localId } = useSelector((state: RootState) => state.auth);
    const dispatch = useDispatch();

    const load = useCallback(async () => {
        setIsLoading(true);
        setIsError(false);
        try {
            await dispatch(fetchProduct(localId));
        } catch (error) {
            setIsError(error);
        }

        setIsLoading(false);
    }, [setIsLoading, setIsError]);

    useEffect(() => {
        const unsubFocus = props.navigation.addListener("focus", load);

        return unsubFocus;
    }, [load]);

    if (isLoading) {
        return (
            <View
                style={{
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <ActivityIndicator size="large" color="blue" />
            </View>
        );
    }

    if (!isLoading && isError) {
        return (
            <ScrollView
                contentContainerStyle={{
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <RefreshControl refreshing={refreshing} onRefresh={load} />

                <Text>{isError}</Text>
            </ScrollView>
        );
    }

    if (!isLoading && !shopProducts.length) {
        return (
            <View
                style={{
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <Text>No Product Found</Text>
            </View>
        );
    }

    return (
        <View
            style={{
                flex: 1,
            }}
        >
            <ProductList data={shopProducts} navigation={props.navigation} />
        </View>
    );
};

export default HomeScreen;
