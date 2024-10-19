/**
 * My To Do List App
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Pressable,
  View,
  Text,
  ScrollView,
  TextInput,
  Button
} from 'react-native';
import ToDoForm from './ToDoForm';
import ToDoList from './ToDoList';
import { useState } from 'react';





function App() {

  const [tasks, settasks] = useState(['Do laundry','Go to gym','Walk dog']);

  const addTask = (task) => {
    const newtasks = [...tasks,task];
    settasks(newtasks);
    
  };

  return (
          <ScrollView>
            <ToDoList tasks={tasks}></ToDoList>
            <ToDoForm addTask={addTask}></ToDoForm> 
          </ScrollView>
  );
}


export default App;
