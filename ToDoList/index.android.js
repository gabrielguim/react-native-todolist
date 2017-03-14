/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

// import a library to help crate a component
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header';
import ToDoList from './src/components/ToDoList';

// create a component
const App = () => (
  <View style={{ flex: 1 }}>
    <Header headerText={'ToDo List'} />
    <ToDoList />
  </View>
);

AppRegistry.registerComponent('ToDoList', () => App);
