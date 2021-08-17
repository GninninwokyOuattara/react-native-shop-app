import React, { useState, useEffect, useCallback } from "react";
import { fetchProduct } from "../stores/actions/products";
import { useDispatch } from "react-redux";
import { fetchOrder } from "../stores/actions/orders";

const useLoad = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState<false | string>(false);
    const dispatch = useDispatch();

    const load = useCallback(async () => {
        setIsLoading(true);
        setIsError(false);
        try {
            await dispatch(fetchProduct());
        } catch (error) {
            setIsError(error);
        }

        setIsLoading(false);
    }, [setIsLoading, setIsError]);

    const loadOrders = useCallback(async () => {
        setIsLoading(true);
        setIsError(false);
        try {
            await dispatch(fetchOrder());
        } catch (error) {
            setIsError(error);
        }

        setIsLoading(false);
    }, [setIsLoading, setIsError]);

    return { isLoading, isError, load, loadOrders };
};

export default useLoad;
