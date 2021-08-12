import React, { useEffect } from "react";
import { View, Text, Image, StyleSheet, Button } from "react-native";
import { useSelector } from "react-redux";
import { RootState } from "../types";
import { useDispatch } from "react-redux";
import { addToCart } from "../stores/actions/cart";
import { NavigationPropWithRoute } from "../types";

const DetailsScreen: React.FC<NavigationPropWithRoute> = (props) => {
    const { productId } = props.route.params;
    const shopProducts = useSelector(
        (state: RootState) => state.products.availableProducts
    );
    const product = shopProducts.find((product) => product.id === productId);
    const dispatch = useDispatch();

    useEffect(() => {
        props.navigation.setOptions({
            title: product?.title,
        });
    }, [productId]);

    if (product) {
        return (
            <View style={styles.container}>
                <Image
                    style={styles.image}
                    source={{
                        uri: product.imageUrl,
                    }}
                />
                <Text style={styles.price}>$ {product.price}</Text>
                <View style={styles.descriptionContainer}>
                    <Text>{product.description}</Text>
                </View>
                <Button
                    title={"To Cart"}
                    onPress={() => dispatch(addToCart(product))}
                />
            </View>
        );
    }

    return (
        <View
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
            <Text>No item found</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        // alignItems: "center",
        // justifyContent : "center"
    },
    image: {
        width: "100%",
        height: 300,
    },
    price: {
        color: "#ccc",
        alignSelf: "center",
        fontSize: 18,
        fontWeight: "600",
        marginVertical: 10,
    },
    descriptionContainer: {
        paddingHorizontal: 15,
    },
    button: {},
});

export default DetailsScreen;
