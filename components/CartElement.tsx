import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import CartItem from "../models/cart-item";
import Icon from "@expo/vector-icons/Ionicons";

const CartElement: React.FC<CartItem> = (props) => {
    return (
        <View style={[styles.container, styles.row]}>
            <View style={{ ...styles.row, flex: 1 }}>
                <Text style={[styles.text, { color: "#CCC", marginRight: 5 }]}>
                    {props.quantity}
                </Text>
                <ScrollView horizontal={true} style={{ flex: 1 }}>
                    <Text style={[styles.text]}>{props.productTitle}</Text>
                </ScrollView>
            </View>
            <View style={{ ...styles.row }}>
                <Text style={[styles.text, { marginLeft: 10 }]}>
                    ${props.productPrice}
                </Text>
                <Icon
                    name="ios-trash"
                    size={20}
                    color="red"
                    style={{ marginLeft: 10 }}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: "100%",
        flex: 1,
        paddingHorizontal: 30,
        paddingVertical: 10,

        justifyContent: "space-between",
    },
    row: {
        flexDirection: "row",
    },
    text: {
        fontWeight: "600",
        fontSize: 18,
    },
});

export default CartElement;
