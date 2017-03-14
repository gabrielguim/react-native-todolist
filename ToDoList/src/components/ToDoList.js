// import libraries for making a component
import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import TaskType from './TaskType';

// make a class component
class ToDoList extends Component {

  toDoList = [
    { name: 'Casa',
      tasks: [
        {
          name: 'Estudar Ionic',
          status: false
        },
        {
          name: 'Estudar React Native',
          status: true
        }
      ]
    },
    { name: 'UFCG',
      tasks: [
        {
          name: 'Estudar OAC',
          status: false
        },
        {
          name: 'Estudar LES',
          status: false
        },
        {
          name: 'Estudar Métodos Estatísticos ',
          status: false
        }
      ]
    }
  ];

  renderAlbums() {
    return this.toDoList.map(item =>
      <TaskType key={item.name} item={item} />
    );
  }

  render() {
    return (
      <ScrollView>
        { this.renderAlbums() }
      </ScrollView>
    );
  }
}

// make the component available to other parts of the app
export default ToDoList;
