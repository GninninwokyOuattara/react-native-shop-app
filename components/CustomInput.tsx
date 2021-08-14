import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

interface props {
    title: string;
    value: string;
    setValueFunc: React.Dispatch<React.SetStateAction<string>>;
    editable?: boolean;
}

const CustomInput: React.FC<props> = (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.inputTitle}>{props.title}</Text>
            <TextInput
                style={styles.inputField}
                value={props.value}
                onChangeText={(newValue) => props.setValueFunc(newValue)}
                editable={props.editable}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginVertical: 30,
    },
    inputField: {
        borderBottomWidth: 1,
        borderBottomColor: "#CCC",
        height: 30,
        fontSize: 20,
    },
    inputTitle: {
        fontWeight: "600",
        fontSize: 25,
    },
});

export default CustomInput;
