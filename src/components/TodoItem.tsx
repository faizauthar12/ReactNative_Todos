import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

export interface TodoItemProps {
  title: string;
  desc: string;
  date: string;
  navigation: any;
  index: number;
  onPress(id: number): void;
}

const TodoItem = ({
  title,
  desc,
  date,
  navigation,
  index,
  onPress,
}: TodoItemProps) => (
  <TouchableOpacity
    style={styles.container}
    onPress={() => {
      navigation.navigate('Detail', {title: title, desc: desc, date: date});
    }}>
    <View style={styles.firstLine}>
      <Text numberOfLines={1} style={styles.textTitle}>
        {title}
      </Text>

      <TouchableOpacity style={styles.Button} onPress={() => onPress(index)}>
        <Text style={styles.buttonText}>X</Text>
      </TouchableOpacity>
    </View>

    <Text>{date}</Text>

    <Text numberOfLines={2} style={styles.textDesc}>
      {desc}
    </Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    shadowRadius: 1,
    padding: 25,
    backgroundColor: '#fff',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  firstLine: {
    flex: 1,
    flexDirection: 'row',
  },
  textTitle: {
    flex: 2,
    flexGrow: 10,
    fontSize: 20,
  },
  textDesc: {
    marginTop: 5,
    fontWeight: '100',
  },
  Button: {
    flex: 1,
    borderRadius: 10,
    marginStart: 10,
    justifyContent: 'center',
    backgroundColor: '#00D1FF',
  },
  buttonText: {
    textAlign: 'center',
  },
});

export default TodoItem;
