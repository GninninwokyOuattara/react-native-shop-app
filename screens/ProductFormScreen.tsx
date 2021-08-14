import React, { useEffect } from "react";
import { View, Text } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/CustomHeaderButton";
import { ScreenNavigationProps, ManageProductsStack } from "../types";

const ProductForm: React.FC<ScreenNavigationProps<ManageProductsStack>> = ({
    navigation,
}) => {
    useEffect(() => {
        // navigation.setOptions({
        //     headerRight: () => {
        //         return (
        //             <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        //                 <Item
        //                     title="cart"
        //                     iconName="ios-menu"
        //                     onPress={() => {}}
        //                 />
        //             </HeaderButtons>
        //         );
        //     },
        // });
    }, []);
    return (
        <View
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
            <Text>Product Form</Text>
        </View>
    );
};

export default ProductForm;
