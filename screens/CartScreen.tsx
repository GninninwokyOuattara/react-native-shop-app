import React from "react";
import { View, Text, StyleSheet, Button, FlatList } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import CartList from "../components/CartList";
import { RootState, NavigationProp } from "../types";
import { addOrder } from "../stores/actions/orders";
import { clearCart } from "../stores/actions/cart";

const CartScreen: React.FC<NavigationProp> = (props) => {
    const cart = useSelector((state: RootState) => state.cart);
    const { localId } = useSelector((state: RootState) => state.auth);
    const dispatch = useDispatch();

    if (!cart.totalAmount) {
        return (
            <View
                style={{
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <Text>Wow such empty.</Text>
                <Text>Consider adding product to your cart ?</Text>
            </View>
        );
    }

    return (
        <View style={{ flex: 1 }}>
            <View style={{ ...styles.header, ...styles.shadowProp }}>
                <View>
                    <Text style={styles.text}>
                        Total :{" "}
                        <Text style={{ ...styles.text, color: "red" }}>
                            ${Math.round(cart.totalAmount * 100) / 100}
                        </Text>
                    </Text>
                </View>
                <Button
                    title={"Order Now"}
                    onPress={() => {
                        dispatch(
                            addOrder(cart.items, cart.totalAmount, localId)
                        );
                        dispatch(clearCart());
                    }}
                />
            </View>
            <CartList data={cart} navigation={props.navigation} />
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
