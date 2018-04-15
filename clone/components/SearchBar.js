import React, { Component } from 'react';
import { View, TextInput, StyleSheet } from 'react-native'

class SearchBar extends Component {
  render() {
    return (
      <View>
        <TextInput
          style={ styles.bar }
          placeholder='Search...'
          defaultValue={ this.props.defaultVal }
          onChangeText={ this.props.changeText }
        />
      </View>
    )
  }
};

const styles = StyleSheet.create({
  bar: {
    height: 30, 
    width: 200, 
    borderColor: 'gray', 
    borderBottomWidth: 1, 
    marginTop: 20, 
    marginBottom: 30, 
    paddingBottom: 5
  }
})

export default SearchBar