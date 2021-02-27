import React,{ useState } from 'react'
import { Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native';

function AddTodo({addNewTask}) {

    const [text, setText] = useState('')

    const addTask = (val) => {
        setText(val)
    }

    return (
        <View>
            <TextInput
                style = {styles.input}
                placeholder = "Add your next task here!"
                onChangeText = {addTask}
            />
            <Button title = "Add Todo" onPress = {() =>  addNewTask(text)} color = "coral"/>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingBottom: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd'
    }
})

export default AddTodo
