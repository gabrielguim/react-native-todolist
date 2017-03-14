// import libraries for making a component
import React from 'react';
import { Text, View } from 'react-native';

// make a component
const Header = (props) => {
  const { textStyle, viewStyle } = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{ props.headerText }</Text>
    </View>
  );
};

// component styles
const styles = {
  viewStyle: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    elevation: 3,
    position: 'relative'
  },
  textStyle: {
    fontSize: 22
  }
};

// make the component available to other parts of the app
export default Header;
