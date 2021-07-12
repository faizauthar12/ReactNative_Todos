import React, {useState, useEffect} from 'react';
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
import AsyncStorage from '@react-native-async-storage/async-storage';

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
  const [todoItems, setTodoItems] = useState<IsTodo[]>([]);
  const [search, setSearch] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');

  const [disableButton, setDisableButton] = useState(false);

  useEffect(() => {
    getData();
  }, []);

  // read asyncstorage
  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@storage_Key');
      if (jsonValue) {
        let tempJson = JSON.parse(jsonValue);
        setTodoItems(tempJson);
      }
    } catch (e) {
      console.error(e);
    }
  };

  // Add a new item to the state
  const addTodoItem = async (_title: string, _desc: string) => {
    if (_title != '' && _desc != '') {
      try {
        let date = new Date().getDate(); //Current Date
        let month = new Date().getMonth() + 1; //Current Month
        let year = new Date().getFullYear(); //Current Year

        let tempArr = [
          ...todoItems,
          {
            id: Math.floor(Math.random() * 10000),
            title: _title,
            desc: _desc,
            date: date + '/' + month + '/' + year,
          },
        ];

        setTodoItems(tempArr);
        const jsonValue = JSON.stringify(tempArr);
        await AsyncStorage.setItem('@storage_Key', jsonValue);

        setTitle('');
        setDesc('');
        setModalVisible(false);

        // debug
        if (__DEV__) {
          const currentData = await AsyncStorage.getItem('@storage_Key');
          console.log(currentData);
        }
      } catch (e) {
        console.log(e);
      }
    }
  };

  // Function to delete an item from our array.
  const completeTodoItem = async (_id: number) => {
    try {
      let tempArr = [...todoItems];
      tempArr.splice(_id, 1);
      setTodoItems(tempArr);

      const jsonValue = JSON.stringify(tempArr);
      await AsyncStorage.setItem('@storage_Key', jsonValue);

      // debug
      if (__DEV__) {
        const currentData = await AsyncStorage.getItem('@storage_Key');
        console.log(currentData);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const onDelay = () => {
    let delay = 5;
    setDisableButton(true);
    setTimeout(() => setDisableButton(false), delay * 1000);
  };

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
          item.title.toLowerCase().includes(search.toLowerCase()),
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
          disabled={disableButton}
          style={styles.buttonAdd}
          onPress={() => {
            setModalVisible(true);
          }}>
          <Text style={styles.text}>
            {disableButton ? 'TIMEOUT' : 'Tambah Pekerjaan'}
          </Text>
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
                onDelay();
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
