import React, { Component } from 'react';
import { Text, View } from 'react-native';

class Header extends Component {

  render() {
    const { textStyle, viewStyle } = styles;

    return (
      <View style={viewStyle}>
          <Text style={textStyle}>
             {this.props.headerText}
          </Text>
      </View>
    );
  }
}

export default Header;

const styles = {
  textStyle: {
    fontSize: 20,
  },
  viewStyle: {
    paddingTop: 30,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F8F8F8',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2
  }
};

