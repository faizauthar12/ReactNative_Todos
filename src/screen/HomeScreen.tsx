import React, {useState} from 'react';
import {StyleSheet, View, SafeAreaView, FlatList} from 'react-native';

import TodoListText from '../components/TodoListText';
import TodoItem from '../components/TodoItem';
import BottomNavbar from '../components/BottomNavbar';
import SearchBar from '../components/SearchBar';

import {AuthNavProps} from '../AuthParamList';

export interface IsTodo {
  id: number;
  title: string;
  desc: string;
}

const TodoData: IsTodo[] = [
  {
    id: 1,
    title: 'Pergi kepasar',
    desc: 'Beli sayuran dan buah',
  },
  {
    id: 2,
    title: 'Berkebun',
    desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque ipsam praesentium aspernatur pariatur quos nam sed eius. Beatae rerum ab atque. Impedit eos incidunt rem magnam pariatur cum ratione ex.',
  },
];

const HomeScreen = ({navigation}: AuthNavProps<'Home'>) => {
  const [todoItems, setTodoItems] = useState(TodoData);
  const [search, setSearch] = useState('');

  /*
  // Add a new item to the state
  function addTodoItem(_text: string) {
    setTodoItems([...todoItems, _text]);
  }
  */

  // Function to delete an item from our array.
  function completeTodoItem(_id: number) {
    let tempArr = [...todoItems];
    tempArr.splice(_id, 1);
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
        /*
        data={todoItems.filter(item =>
          item.toLowerCase().includes(search.toLowerCase()),
        )}
        */
        data={todoItems.filter(item =>
          item.title.toLowerCase().includes(search.toLowerCase()),
        )}
        keyExtractor={todoItems => todoItems.id}
        renderItem={({item, index}) => (
          <TodoItem
            title={item.title}
            desc={item.desc}
            navigation={navigation}
            index={index}
            onPress={completeTodoItem}
          />
        )}
      />
      <BottomNavbar onModalPress={console.log} />
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
