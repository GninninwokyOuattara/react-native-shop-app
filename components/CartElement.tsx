import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import CartItem from "../models/cart-item";
import Icon from "@expo/vector-icons/Ionicons";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../stores/actions/cart";

const CartElement: React.FC<
    CartItem & { productId: string; withoutDelete?: boolean }
> = (props) => {
    const dispatch = useDispatch();
    return (
        <View style={[styles.container, styles.row]}>
            <View style={{ ...styles.row, flex: 1 }}>
                <Text style={[styles.text, { color: "#CCC", marginRight: 5 }]}>
                    {props.quantity}
                </Text>
                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    style={{ flex: 1 }}
                >
                    <Text style={[styles.text]}>{props.productTitle}</Text>
                </ScrollView>
            </View>
            <View style={{ ...styles.row }}>
                <Text style={[styles.text, { marginLeft: 10 }]}>
                    ${props.productPrice}
                </Text>
                {props.withoutDelete || (
                    <Icon
                        name="ios-trash"
                        size={20}
                        color="red"
                        style={{ marginLeft: 10 }}
                        onPress={() =>
                            dispatch(removeFromCart(props.productId))
                        }
                    />
                )}
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
