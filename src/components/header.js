// import libraries for making component
import React from 'react';
import { Text } from 'react-native';

//make component
const Header = () => {
  const { textStyle } = styles;

  return <Text style={textStyle}>Albums!</Text>;
};

const styles = {
  textStyle: {
    fontSize: 20
  }
};

//make component avaliable to other parts of app
export default Header;
