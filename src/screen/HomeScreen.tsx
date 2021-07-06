import React, {useState} from 'react';
import {StyleSheet, View, SafeAreaView, FlatList} from 'react-native';

import TodoListText from '../components/TodoListText';
import TodoItem from '../components/TodoItem';
import BottomNavbar from '../components/BottomNavbar';
import SearchBar from '../components/SearchBar';

const TodoData: string[] = ['Buy something', 'Buy buy'];

const HomeScreen = () => {
  const [todoItems, setTodoItems] = useState(TodoData);
  const [search, setSearch] = useState('');

  // Add a new item to the state
  function addTodoItem(_text: string) {
    setTodoItems([...todoItems, _text]);
  }

  // Function to delete an item from our array using the index
  function completeTodoItem(_index: number) {
    let tempArr = [...todoItems];
    tempArr.splice(_index, 1);
    setTodoItems(tempArr);
  }

  // TODO: Title, description, button delete, timestamp
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TodoListText />

        <SearchBar onChangeText={setSearch} />
      </View>

      <FlatList
        style={styles.listStyle}
        data={todoItems.filter(item =>
          item.toLowerCase().includes(search.toLowerCase()),
        )}
        keyExtractor={index => index.toString()}
        renderItem={({item, index}) => (
          <TodoItem data={item} id={index} onPress={completeTodoItem} />
        )}
      />

      <BottomNavbar onPress={addTodoItem} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingTop: 40,
    marginBottom: 20,
  },
  listStyle: {
    flex: 2,
    paddingHorizontal: 26,
  },
});

export default HomeScreen;
