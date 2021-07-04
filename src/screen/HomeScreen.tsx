import React, { useState } from "react";
import { StyleSheet, View, SafeAreaView, ScrollView, Dimensions, TextInput, TouchableOpacity, Text } from "react-native";

import TodoListText from "../components/TodoListText";
import TodoItem from "../components/TodoItem";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


export interface IsTodo {
    index: number,
    item: String,
}

const HomeScreen = () => {
    const [todo, setTodo] = useState();
    const [todoItems, setTodoItems] = useState([]);

    const handleAddTodo = () => {
        setTodoItems([...todoItems, todo])
        setTodo(null);
    }
    
    const completeTodo = (index) => {
        let itemsCopy = [...todoItems];
        itemsCopy.splice(index, 1);
        setTodoItems(itemsCopy)
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.tasksWrapper}>
                <TodoListText/>
            </View>

            <ScrollView style={styles.listStyle}>
                {
                    todoItems.map((item, index) => {
                        return(
                            <TouchableOpacity style={styles.itemStyle} key={index} onPress={() => completeTodo(index)}>
                                <TodoItem desc={item}/>
                            </TouchableOpacity>
                        )
                    })
                }
            </ScrollView>

            <View style={styles.bottomNavbar}>
                <View style={styles.bottomContainer}>
                    <TextInput 
                        style={styles.InputStyle}
                        placeholder={"Tulis pekerjaanmu"}
                        value={todo}
                        onChangeText={text => setTodo(text)}
                    >
                    </TextInput>

                    <TouchableOpacity
                        style={styles.Button}
                        onPress={() => handleAddTodo()}
                    >
                        <Text style={styles.text}>Tambah</Text>
                    </TouchableOpacity>
                </View>
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
    bottomContainer: {
        flexDirection: "row",
    },
    InputStyle: {
        flex: 2,
        flexGrow: 4,
        borderRadius: 10,
        borderWidth: 1
    },
    Button: {
        flex: 1,
        borderRadius: 10,
        marginStart: 10,
        justifyContent: "center",
        backgroundColor: "#00D1FF"
    },
    text: {
        padding: 10
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