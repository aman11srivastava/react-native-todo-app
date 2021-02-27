import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Alert, FlatList, Keyboard, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import AddTodo from './components/AddTodo';
import Header from './components/Header'
import TodoItem from './components/TodoItem'

export default function App() {

  const [todos, setTodos] = useState([
    {
      id: '1',
      text: 'Play FIFA'
    },
    {
      id: '2',
      text: 'Create App'
    },
    {
      id: '3',
      text: 'Play PUBG'
    },
    {
      id: '4',
      text: 'Play Football'
    },
    {
      id: '5',
      text: 'Sleep'
    },
  ])

  const deleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) =>  todo.id !== id))
  }

  const addNewTask = (text) => {
    if(text.length > 3){
      setTodos((prevTodos) => [
        {text: text, id: Math.random().toString()},
        ...prevTodos
      ])  
    }
    else{
      Alert.alert('OOPS!', 'Todos must be atleast 3 characters long.', [
        {
          text: 'Understood', onPress: () => console.log('Alert closed')
        }
      ])      
    }
  }
  
  return (
      <TouchableWithoutFeedback onPress = {() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Header/>
        <View style = {styles.content}>
          <AddTodo
            addNewTask = {addNewTask}
          />
          <View style = {styles.list}>
            <FlatList
              data = {todos}
              keyExtractor = {(item) => item.id}
              renderItem = {( { item } ) => (
                <TodoItem 
                  item = {item}
                  deleteTodo = {deleteTodo}
                />
              )} 
            />
          </View>
        </View>
        <StatusBar style="auto" />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 40,
    flex: 1
  },
  list: {
    marginTop: 20,
    flex: 1
  }
});
