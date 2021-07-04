import React, { useState } from "react";
import { StyleSheet, View, SafeAreaView, FlatList, Dimensions } from "react-native";

import TodoListText from "../components/TodoListText";
import TodoItem from "../components/TodoItem";
import BottomNavbar from "../components/BottomNavbar";

import TodoData from "../data/TodoData";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const HomeScreen = () => {

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.tasksWrapper}>
                <TodoListText/>
            </View>

            <FlatList
                style={styles.listStyle}

                data={TodoData}
                keyExtractor={TodoData => TodoData.id}

                renderItem={({ item }) => {
                    return(
                        <TodoItem desc={item.desc}/>
                    )
                }}
            />

            <View style={styles.bottomNavbar}>
                    <BottomNavbar/>
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
});

export default HomeScreen;