import React, { FC } from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";

interface Props {
    desc: String
}
const TodoItem: FC<Props> = ({ desc }) => {
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