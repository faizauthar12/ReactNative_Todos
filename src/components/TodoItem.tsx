import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";

const TodoItem = () => {
    return (
        <TouchableOpacity style={styles.itemStyle}>
            <Text numberOfLines={1} style={styles.textStyle}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae nisi veniam voluptatibus maiores quae voluptatem molestias ut unde explicabo eligendi delectus accusamus et fuga esse, ea laborum distinctio! Ullam, nihil!</Text>
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