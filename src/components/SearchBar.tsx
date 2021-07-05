import React from "react";
import { StyleSheet, View, TextInput, TextInputProps } from "react-native";

export interface SearchBarProps extends TextInputProps{}

const SearchBar = ({autoCorrect=false,autoCapitalize="none",placeholder="Cari hal yang akan kamu lakukan",style,...props }:SearchBarProps) => {

    return (
        <View style={styles.container}>
            <TextInput
                {...props}
                style={StyleSheet.flatten([styles.inputStyle,style])}
                placeholder={placeholder}
                autoCorrect={autoCorrect}
                autoCapitalize={autoCapitalize}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        marginTop: 10,
        marginHorizontal: 30,
    },
    inputStyle: {
        flex: 2,
        flexGrow: 4,
        borderRadius: 10,
        borderWidth: 1,
        color: "black",
        paddingStart: 15,
        backgroundColor: "#fff",
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

export default SearchBar;