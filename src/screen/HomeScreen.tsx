import React, { useState } from "react";
import { 
    StyleSheet,
    View,
    SafeAreaView,
    FlatList,
    Dimensions,
    Text,
    TextInput,
    TouchableOpacity
} from "react-native";

import TodoData from "../data/TodoData";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const HomeScreen = () => {
    const [task, setTask] = useState();
    const [taskItems, setTaskItems] = useState([]);

    const AddTask = () => {
        setTaskItems([...taskItems, task])
        setTask(null);
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.tasksWrapper}>
                <Text style={styles.textHeader}>Todo List</Text>
            </View>

            <View>
                <TouchableOpacity style={styles.itemStyle}>
                    <Text numberOfLines={1} style={styles.textItem}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel doloribus repellat magnam ipsa animi, consectetur iure fugit explicabo, nisi ullam similique cumque tenetur illum magni? Dolore doloribus aspernatur optio cupiditate.</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.bottomNavbar}>
                <TextInput 
                    style={styles.InputAddStyle}
                    placeholder={"Tuliskan pekerjaanmu"}
                    value={task}
                    onChangeText={text => setTask(text)}
                >

                </TextInput>

                <TouchableOpacity
                    style={styles.Button}
                    onPress={() => AddTask()}
                >
                    <Text style={styles.textButton}>Tambah</Text>
                </TouchableOpacity>
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
    textHeader: {
        fontSize: 24,
        fontWeight: "bold",
        paddingHorizontal: 26
    },
    listStyle: {
        flex: 2,
        paddingHorizontal: 26,
    },
    bottomNavbar: {
        flexDirection: "row",
        padding: 10,
        bottom: 0,
        width: windowWidth,
        height: windowHeight * 0.1,
    },
    InputAddStyle: {
        flex: 2,
        flexGrow: 4,
        borderRadius: 10,
        borderWidth: 1,
        backgroundColor: "#fff",
    },
    Button: {
        flex: 1,
        borderRadius: 10,
        marginStart: 10,
        justifyContent: "center",
        backgroundColor: "#00D1FF"
    },
    textButton: {
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
    textItem: {
        fontSize: 20
    }
});

export default HomeScreen;