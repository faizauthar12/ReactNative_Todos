import React, { useState } from "react";
import { StyleSheet, View, SafeAreaView, FlatList, Dimensions, TextInput, TouchableOpacity, Text } from "react-native";

import TodoListText from "../components/TodoListText";
import TodoItem from "../components/TodoItem";
import BottomNavbar from "../components/BottomNavbar";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const TodoData:String[] = [
    "Buy something",
    "Buy buy"
];

const HomeScreen = () => {

    const [todoItems, setTodoItems] = useState(TodoData);

    // Add a new item to the state
    function addTodoItem(_text) {
        setTodoItems([...todoItems, _text]);
    }

    // Function to delete an item from our array using the index
    function completeTodoItem(_index){
        let tempArr = [...todoItems];
        tempArr.splice(_index, 1);
        setTodoItems(tempArr)
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.tasksWrapper}>
                <TodoListText/>
            </View>

            <FlatList
                style={styles.listStyle}
                data={todoItems}
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
});

export default HomeScreen;