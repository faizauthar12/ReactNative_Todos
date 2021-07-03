import React from "react";
import { Text, StyleSheet, View, TextInput, TouchableOpacity, Dimensions } from "react-native";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const BottomNavbar = () => {
    return (
        <View style={styles.container}>
            <TextInput style={styles.InputStyle}>

            </TextInput>

            <TouchableOpacity
                style={styles.Button}
                onPress={() => {}}
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