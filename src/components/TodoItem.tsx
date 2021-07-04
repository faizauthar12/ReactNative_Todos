import React from "react";
import { Text, StyleSheet } from "react-native";

const TodoItem = ({ desc }) => {
    return (
        <Text numberOfLines={1} style={styles.textStyle}>{desc}</Text>
    );
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 20
    }
});

export default TodoItem;