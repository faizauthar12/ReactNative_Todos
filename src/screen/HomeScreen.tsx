import React, { useState } from "react";
import { StyleSheet, View, SafeAreaView, FlatList, Dimensions, TextInput, TouchableOpacity, Text } from "react-native";

import TodoListText from "../components/TodoListText";
import TodoItem from "../components/TodoItem";
import BottomNavbar from "../components/BottomNavbar";
import SearchBar from "../components/SearchBar";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const TodoData:String[] = [
    "Buy something",
    "Buy buy"
];

const HomeScreen = () => {

    const [todoItems, setTodoItems] = useState(TodoData);
    const [todoSearch,setTodoSearch] = useState(todoItems);

    // Add a new item to the state
    function addTodoItem(_text:string) {
        setTodoItems([...todoItems, _text]);
        setTodoSearch([...todoItems, _text]);
    }

    // Function to delete an item from our array using the index
    function completeTodoItem(_index:number){
        let tempArr = [...todoItems];
        tempArr.splice(_index, 1);
        setTodoItems(tempArr);
        setTodoSearch(tempArr);
    }

    function searchItem(_text:string) {
       if (_text === null ) {
           setTodoSearch(todoItems);
       } else {
           let tempArr = [...todoItems];
           let search = tempArr.filter(item => item.includes(_text));
           setTodoSearch(search)
           //console.log(tempArr);
           //console.log(search);
       }
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.tasksWrapper}>
                <TodoListText/>
                <View style={styles.searchBarStyle}>
                    <SearchBar onPress={searchItem}/>
                </View>
            </View>

            <FlatList
                style={styles.listStyle}
                data={todoSearch}
                keyExtractor={(item, index) => index.toString()}

                renderItem={({ item, index }) => {
                    return(
                        <TouchableOpacity
                            style={styles.itemStyle}
                            onPress={() => {completeTodoItem(index);}}
                        >
                            <TodoItem desc={item}/>
                        </TouchableOpacity>
                    )
                }}
            />

            <View style={styles.bottomNavbar}>
                <BottomNavbar onPress={addTodoItem}/>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    tasksWrapper: {
        paddingTop: 40,
        marginBottom: 20,
    },
    listStyle: {
        flex: 2,
        paddingHorizontal: 26,
    },
    bottomNavbar: {
        padding: 10,
        bottom: 0,
        width: windowWidth,
        height: windowHeight * 0.1,
        backgroundColor: "#fff",
    },
    itemStyle: {
        borderRadius: 10,
        shadowRadius: 1,
        padding: 25,
        backgroundColor: "#fff",
        flexDirection: "column",
        justifyContent: "space-between",
    },
    searchBarStyle:{
        marginTop: 10,
        marginHorizontal: 30,
    }
});

export default HomeScreen;