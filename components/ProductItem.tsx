import React from "react";
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Image,
    Button,
} from "react-native";
import Product from "../models/product";

interface props {
    product: Product;
    onSelectProduct: () => void;
    userProduct?: boolean;
}

const ProductItem: React.FC<props> = ({
    product,
    onSelectProduct,
    userProduct,
}) => {
    let buttonComponent: JSX.Element;
    if (userProduct) {
        buttonComponent = (
            <View style={styles.buttonContainer}>
                <Button title={"Edit"} onPress={onSelectProduct} />
                <Button title={"Delete"} onPress={onSelectProduct} />
            </View>
        );
    } else {
        buttonComponent = (
            <View style={styles.buttonContainer}>
                <Button title={"View Details"} onPress={onSelectProduct} />
                <Button title={"To Cart"} onPress={onSelectProduct} />
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
                <View>
                    <Text style={styles.heading}>{product.title}</Text>
                </View>
                <View>
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