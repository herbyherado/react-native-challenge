import React, { Component } from 'react';
import { View, StyleSheet, Image } from 'react-native'

class Logo extends Component {
  render() {
    return (
    <View style={styles.imgContain}>
      <Image style={ styles.image } source={require('./assets/UFC_Logo.png')}/> 
    </View>
    )
  }
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: 'contain',
    width: '90%',
    alignSelf: 'center',
  },
  imgContain: {
    height: 150,
    marginBottom: 20
  }
})

export default Logo