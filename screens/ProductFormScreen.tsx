import React, { useEffect, useState, useCallback } from "react";
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
    Keyboard,
    ScrollView,
} from "react-native";
import { useHeaderHeight } from "@react-navigation/elements";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/CustomHeaderButton";
import CustomInput from "../components/CustomInput";
import { ScreenNavigationProps, ManageProductsStack } from "../types";
import { useDispatch } from "react-redux";
import { addProduct, updateProduct } from "../stores/actions/products";
import Product from "../models/product";

const ProductForm: React.FC<
    ScreenNavigationProps<ManageProductsStack> & { route: any }
> = (props) => {
    const headerHeight = useHeaderHeight();
    const [id, setId] = useState(Date.now().toString());
    const [title, setTitle] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [price, setPrice] = useState("0");
    const [description, setDescription] = useState("");

    const dispatch = useDispatch();

    // useEffect(() => {
    //     console.log("Builted", buildProduct());
    // }, [title]);

    let productToDispatch = new Product(
        id,
        "u1",
        title,
        imageUrl,
        description,
        parseFloat(price) || 0
    );
    let product = props.route.params;
    const { goBack } = props.navigation;

    useEffect(() => {
        if (product) {
            product = props.route.params.product;
            props.navigation.setOptions({
                headerRight: () => {
                    return (
                        <HeaderButtons
                            HeaderButtonComponent={CustomHeaderButton}
                        >
                            <Item
                                title="cart"
                                iconName="ios-brush"
                                onPress={() => {
                                    dispatch(
                                        updateProduct(
                                            new Product(
                                                id,
                                                "u1",
                                                title,
                                                imageUrl,
                                                description,
                                                parseFloat(price)
                                            )
                                        )
                                    );
                                    goBack();
                                }}
                            />
                        </HeaderButtons>
                    );
                },
            });
        } else {
            props.navigation.setOptions({
                headerRight: () => {
                    return (
                        <HeaderButtons
                            HeaderButtonComponent={CustomHeaderButton}
                        >
                            <Item
                                title="cart"
                                iconName="ios-checkmark"
                                onPress={() => {
                                    dispatch(
                                        addProduct({
                                            title,
                                            ownerId: "u1",
                                            imageUrl,
                                            description,
                                            price: +price,
                                        })
                                    );
                                    goBack();
                                }}
                            />
                        </HeaderButtons>
                    );
                },
            });
        }
    }, [product, id, title, imageUrl, description, price]);

    useEffect(() => {
        if (product) {
            setId(product.id);
            setTitle(product.title);
            setImageUrl(product.imageUrl);
            setPrice(product.price.toString());
            setDescription(product.description);
        }
    }, [product]);

    // useEffect(() => {
    //     // console.log(id, title, description);
    //     productToDispatch = new Product(
    //         id,
    //         "u1",
    //         title,
    //         imageUrl,
    //         description,
    //         parseFloat(price)
    //     );
    //     console.log("pro", productToDispatch);
    // }, [id, title, imageUrl, description, price]);

    return (
        <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={"padding"}
            keyboardVerticalOffset={headerHeight + 20}
        >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <ScrollView style={styles.container}>
                    <CustomInput
                        title={"Title"}
                        value={title}
                        setValueFunc={setTitle}
                        editable={true}
                    />
                    <CustomInput
                        title={"Image URL"}
                        value={imageUrl}
                        setValueFunc={setImageUrl}
                        editable={true}
                    />
                    <CustomInput
                        title={"Price"}
                        value={price}
                        setValueFunc={setPrice}
                        editable={!product}
                    />
                    <CustomInput
                        title={"Description"}
                        value={description}
                        setValueFunc={setDescription}
                        editable={true}
                    />
                </ScrollView>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    inputField: {
        borderBottomWidth: 1,
        borderBottomColor: "#CCC",
        height: 40,
        fontSize: 20,
    },
    inputTitle: {
        fontWeight: "600",
        fontSize: 25,
    },
});

export default ProductForm;
