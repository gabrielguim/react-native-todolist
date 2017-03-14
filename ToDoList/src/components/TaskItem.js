// import libraries for making a component
import React from 'react';
import CheckBox from 'react-native-check-box';
import { Alert } from 'react-native';

// make a component
const TaskItem = ({ task }) => {
  const { containerStyle } = styles;

  return (
    <CheckBox
      style={containerStyle}
      onClick={() => {
          if (task.status) {
            Alert.alert(
              'Task Alert',
              'Sua atividade agora está "não realizada"',
            );
          } else {
            Alert.alert(
              'Task Alert',
              'Sua atividade foi realizada',
            );
          }
          
          task.status = !task.status;
        }
      }

      isChecked={task.status}
      rightText={task.name}
    />
  );
};

// component styles
const styles = {
  containerStyle: {
    flex: 1,
    padding: 15
  }
};

// make the component available to other parts of the app
export default TaskItem;
