import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  SafeAreaView,
  FlatList,
  Modal,
  Text,
  TouchableOpacity,
  Dimensions,
  TextInput,
} from 'react-native';

import TodoListText from '../components/TodoListText';
import TodoItem from '../components/TodoItem';
import SearchBar from '../components/SearchBar';

import {AuthNavProps} from '../AuthParamList';

const windowHeight = Dimensions.get('window').height;

export interface IsTodo {
  id: number;
  title: string;
  desc: string;
  date: string;
}

const TodoData: IsTodo[] = [
  {
    id: 1,
    title: 'Pergi kepasar',
    desc: 'Beli sayuran dan buah',
    date: '1/07/2021',
  },
  {
    id: 2,
    title: 'Berkebun',
    desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque ipsam praesentium aspernatur pariatur quos nam sed eius. Beatae rerum ab atque. Impedit eos incidunt rem magnam pariatur cum ratione ex.',
    date: '1/07/2021',
  },
];

const HomeScreen = ({navigation}: AuthNavProps<'Home'>) => {
  const [todoItems, setTodoItems] = useState(TodoData);
  const [search, setSearch] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');

  // Add a new item to the state
  function addTodoItem(_title: string, _desc: string) {
    if (_title != '' && _desc != '') {
      let date = new Date().getDate(); //Current Date
      let month = new Date().getMonth() + 1; //Current Month
      let year = new Date().getFullYear(); //Current Year

      setTodoItems([
        ...todoItems,
        {
          id: Math.floor(Math.random() * 10000),
          title: _title,
          desc: _desc,
          date: date + '/' + month + '/' + year,
        },
      ]);
      setTitle('');
      setDesc('');
      setModalVisible(false);
    }
  }

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
        keyExtractor={todoItems => todoItems.id.toString()}
        renderItem={({item, index}) => (
          <TodoItem
            title={item.title}
            desc={item.desc}
            date={item.date}
            navigation={navigation}
            index={index}
            onPress={completeTodoItem}
          />
        )}
      />

      <View style={styles.bottomContainer}>
        <TouchableOpacity
          style={styles.buttonAdd}
          onPress={() => {
            setModalVisible(true);
          }}>
          <Text style={styles.text}>Tambah Pekerjaan</Text>
        </TouchableOpacity>
      </View>

      <Modal animationType="slide" visible={modalVisible}>
        <View style={{marginTop: 40, flex: 1}}>
          <Text style={{textAlign: 'center', fontSize: 30}}>
            Menambahkan todo
          </Text>

          <View
            style={{
              flex: 2,
              flexGrow: 10,
              marginTop: 10,
              marginHorizontal: 30,
            }}>
            <TextInput
              style={{color: 'black'}}
              placeholder={'Judul dari pekerjaanmu'}
              onChangeText={text => setTitle(text)}></TextInput>
            <TextInput
              style={{color: 'black'}}
              placeholder={'Deskripsikan pekerjaanmu'}
              multiline
              onChangeText={text => setDesc(text)}></TextInput>
          </View>

          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity
              style={[styles.modalButton, {backgroundColor: '#FF4747'}]}
              onPress={() => setModalVisible(false)}>
              <Text style={styles.text}>Tutup modal</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.modalButton, {backgroundColor: '#00D1FF'}]}
              onPress={() => {
                addTodoItem(title, desc);
              }}>
              <Text style={styles.text}>Tambah Todo</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
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
  modalButton: {
    flex: 1,
    padding: 15,
    marginBottom: 10,
    marginHorizontal: 10,
    borderRadius: 20,
    alignItems: 'center',
  },
  bottomContainer: {
    flexDirection: 'row',
    padding: 10,
    bottom: 0,
    height: windowHeight * 0.1,
  },
  buttonAdd: {
    flex: 1,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00D1FF',
  },
  text: {
    textAlign: 'center',
    color: 'white',
    fontSize: 20,
  },
});

export default HomeScreen;
