import React, { Component } from 'react';
import { View, Text, Image, FlatList, StyleSheet } from 'react-native'
import FighterProfile from '../components/FighterProfile'

class FighterStats extends Component {
  static navigationOptions = ({ navigation }) => {
    const { title } = navigation.state.params
    return {
      title: title
    }
  }

  render() {
    let dataStat = this.props.navigation.state.params.data
    return (
      <FighterProfile stat={ dataStat }/>
    )
  }
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',
  }
})

export default FighterStats