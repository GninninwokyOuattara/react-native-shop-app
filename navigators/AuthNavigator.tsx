import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AuthScreen from "../screens/AuthScreen";

const Stack = createNativeStackNavigator();

export const AuthScreenNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName={"Authentificate"}
            screenOptions={{
                headerShown: true,
            }}
        >
            <Stack.Screen name="Authentificate">
                {(props) => <AuthScreen {...props} />}
            </Stack.Screen>
        </Stack.Navigator>
    );
};
