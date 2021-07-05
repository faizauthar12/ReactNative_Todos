import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";

export interface TodoItemProps{
    data: string,
    id: number,
    onPress(id:number):void
}

const TodoItem = ({ data, id, onPress }:TodoItemProps) => {
    return (
        <TouchableOpacity
            style={styles.itemStyle}
            onPress={() => {
                onPress(id);
            }}
        >
            <Text numberOfLines={1} style={styles.textStyle}>{data}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 20
    },
    itemStyle: {
        borderRadius: 10,
        shadowRadius: 1,
        padding: 25,
        backgroundColor: "#fff",
        flexDirection: "column",
        justifyContent: "space-between",
        marginBottom: 5,
    }
});

export default TodoItem;