import React, { Component } from 'react';
import { View, Text } from 'react-native';
import TaskItem from './TaskItem';

class TaskType extends Component {

  item = this.props.item;

  renderAlbums() {
    return this.item.tasks.map(task =>
      <TaskItem key={task.name} task={task} />
    );
  }

  render() {
    return (
      <View style={styles.containerStyle}>
        <Text style={styles.cardTitle}>{this.item.name}</Text>
        { this.renderAlbums() }
      </View>
    );
  }
}

const styles = {

  containerStyle: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    elevation: 2,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
    marginBottom: 7,
    padding: 10
  },

  cardTitle: {
    color: '#000',
    fontSize: 20,
    padding: 15
  }

};

export default TaskType;
