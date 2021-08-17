import React, { useState } from "react";
import { View, Text, StyleSheet, Button, FlatList } from "react-native";
import CartItem from "../models/cart-item";
import Order from "../models/order";
import { RenderItemFunc } from "../types";
import CartElement from "./CartElement";

const OrderItem: React.FC<Order> = ({
    date,
    id,
    items,
    totalAmount,
    getReadableDate,
}) => {
    const [showDetails, setShowDetails] = useState(false);

    const renderDetails: RenderItemFunc<string> = ({ item }) => {
        return <CartElement {...items[item]} productId={"1"} />;
    };

    return (
        <View style={styles.container}>
            <View style={styles.info}>
                <Text style={[styles.textBold, styles.textSize]}>
                    ${Math.round(totalAmount * 100) / 100}
                </Text>
                <Text style={[styles.textGray]}>{getReadableDate(date)}</Text>
            </View>
            <Button
                title={`${showDetails ? "Hide" : "View"} Details`}
                onPress={() => setShowDetails((showDetails) => !showDetails)}
            />
            {/* <CartElement {...items}/> */}
            {showDetails && (
                <FlatList
                    data={Object.keys(items)}
                    renderItem={renderDetails}
                    keyExtractor={(index) => index.toString()}
                />
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: "95%",
        alignSelf: "center",
        backgroundColor: "white",
        borderRadius: 10,
        shadowColor: "#000000",
        shadowOpacity: 0.8,
        shadowRadius: 4,
        shadowOffset: {
            height: 2,
            width: 0,
        },
        padding: 10,
        marginVertical: 20,
    },
    info: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 10,
        alignItems: "center",
    },
    textBold: {
        fontWeight: "600",
    },
    textGray: {
        color: "#ccc",
    },
    textSize: {
        fontSize: 18,
    },
});

export default OrderItem;
