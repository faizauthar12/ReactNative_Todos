import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";

const TodoItem = ({ desc }) => {
    return (
        <TouchableOpacity style={styles.itemStyle}>
            <Text numberOfLines={1} style={styles.textStyle}>{desc}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    itemStyle: {
        borderRadius: 10,
        shadowRadius: 1,
        padding: 25,
        backgroundColor: "#fff",
        flexDirection: "column",
        justifyContent: "space-between",
    },
    textStyle: {
        fontSize: 20
    }
});

export default TodoItem;