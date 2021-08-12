import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { useSelector } from "react-redux";
import { RootState } from "../types";

const CartScreen = () => {
    const cart = useSelector((state: RootState) => state.cart);
    return (
        <View style={{ flex: 1 }}>
            {/* <Text>Cart Screens</Text> */}
            <View style={{ ...styles.header, ...styles.shadowProp }}>
                <View>
                    <Text style={styles.text}>
                        Total :{" "}
                        <Text style={{ ...styles.text, color: "red" }}>
                            ${cart.totalAmount}
                        </Text>
                    </Text>
                </View>
                <Button title={"Order Now"} onPress={() => {}} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 10,
        width: "90%",
        height: 50,
        alignSelf: "center",
        marginTop: 20,
        marginBottom: 40,
        backgroundColor: "white",
    },

    text: {
        fontSize: 20,
        fontWeight: "600",
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
});

export default CartScreen;
