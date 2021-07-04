import React, { useState } from "react";
import { Text, StyleSheet, View, TextInput, TouchableOpacity } from "react-native";

const BottomNavbar = ({ onPress }) => {
    const [text, setText] = useState(null);

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.InputStyle}
                onChangeText={text => setText(text)}
                value={text}
            />

            <TouchableOpacity
                style={styles.Button}
                onPress={() => onPress(text)}
            >
                <Text style={styles.text}>Tambah</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
    },
    InputStyle: {
        flex: 2,
        flexGrow: 4,
        borderRadius: 10,
        borderWidth: 1
    },
    Button: {
        flex: 1,
        borderRadius: 10,
        marginStart: 10,
        justifyContent: "center",
        backgroundColor: "#00D1FF"
    },
    text: {
        padding: 10
    }
});

export default BottomNavbar;