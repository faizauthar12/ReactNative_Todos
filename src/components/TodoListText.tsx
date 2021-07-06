import React from 'react';
import {Text, StyleSheet} from 'react-native';

const TodoListText = () => {
  return <Text style={styles.text}>Todo List</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 26,
  },
});

export default TodoListText;
