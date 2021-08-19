import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import AppDrawer from "./AppDrawer";
import { AuthScreenNavigator } from "./AuthNavigator";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../types";
import { setLogout } from "../stores/actions/auth";

const NavContainer = () => {
    const { localId, expiresIn } = useSelector(
        (state: RootState) => state.auth
    );
    const dispatch = useDispatch();

    useEffect(() => {
        console.log(localId);
        if (localId) {
            dispatch(setLogout(expiresIn - Date.now()));
        }
    }, [localId]);

    if (localId) {
        return <AppDrawer />;
    }

    return <AuthScreenNavigator />;
};

export default NavContainer;
