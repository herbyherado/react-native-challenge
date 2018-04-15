import React, { Component } from 'react';
import { Text, View, Image, StyleSheet } from 'react-native'

class FighterProfile extends Component {
  render() {
    return (
      <View style={ styles.body }>
        <Text style={ styles.nick }> { this.props.stat.nickname }</Text>
        <Text style={ styles.weight }> { this.props.stat.weight_class }</Text>
        <Image 
          style={ styles.img } 
          source={{ uri: this.props.stat.right_full_body_image }} 
        />
      </View>
    )
  }
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',
  },
  nick: {
    fontSize: 20,
    fontFamily: 'Helvetica',
    paddingVertical: 10
  },
  weight: {
    fontSize: 12,
    paddingVertical: 3
  },
  img: {
    width: 180,
    height: '100%',
    alignSelf: 'center',
    marginTop: 10
  }
})

export default FighterProfile