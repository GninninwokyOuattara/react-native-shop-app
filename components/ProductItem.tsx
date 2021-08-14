import React from "react";
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Image,
    Button,
    Alert,
} from "react-native";
import { useDispatch } from "react-redux";
import Product from "../models/product";
import { addToCart } from "../stores/actions/cart";
import { deleteProduct } from "../stores/actions/products";

interface props {
    product: Product;
    onSelectProduct: () => void;
    userProduct?: boolean;
    navigation: any;
}

const ProductItem: React.FC<props> = ({
    product,
    onSelectProduct,
    userProduct,
    navigation,
}) => {
    const dispatch = useDispatch();

    const dispatchAction = () => {
        return dispatch(addToCart(product));
    };

    const deleteHandler = () => {
        Alert.alert(
            "Warning",
            "Are you sure ?",
            [
                {
                    text: "Cancel",
                    onPress: () => {},
                    style: "default",
                },
                {
                    text: "Confirm",
                    onPress: () => dispatch(deleteProduct(product.id)),
                    style: "destructive",
                },
            ],
            {
                cancelable: true,
            }
        );
    };

    let buttonComponent: JSX.Element;
    if (userProduct) {
        buttonComponent = (
            <View style={styles.buttonContainer}>
                <Button
                    title={"Edit"}
                    onPress={() =>
                        navigation.navigate("ProductForm", {
                            product: product,
                        })
                    }
                />
                <Button title={"Delete"} onPress={() => deleteHandler()} />
            </View>
        );
    } else {
        buttonComponent = (
            <View style={styles.buttonContainer}>
                <Button title={"View Details"} onPress={onSelectProduct} />
                <Button title={"To Cart"} onPress={dispatchAction} />
            </View>
        );
    }

    return (
        <TouchableOpacity onPress={onSelectProduct} style={styles.shadowProp}>
            <View style={{ ...styles.card }}>
                <Image
                    style={styles.image}
                    source={{
                        uri: product.imageUrl,
                    }}
                />
                <View style={{ alignSelf: "center" }}>
                    <Text style={styles.heading}>{product.title}</Text>

                    <Text style={styles.price}>$ {product.price}</Text>
                </View>
                {buttonComponent}
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    heading: {
        fontSize: 18,
        fontWeight: "600",
        marginBottom: 5,
    },
    price: {
        color: "#ccc",
    },
    card: {
        backgroundColor: "white",
        borderRadius: 8,
        // paddingVertical: 45,
        // paddingHorizontal: 25,
        width: "95%",
        height: 250,
        marginVertical: 10,
        alignSelf: "center",
        flex: 1,
        flexDirection: "column",
        overflow: "hidden",
    },
    shadowProp: {
        borderRadius: 10,
        shadowColor: "#000000",
        shadowOpacity: 0.8,
        shadowRadius: 4,
        shadowOffset: {
            height: 2,
            width: 0,
        },
    },
    image: {
        width: "100%",
        height: "60%",
    },
    buttonContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 10,
    },
});

export default ProductItem;
