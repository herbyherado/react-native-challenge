import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native'

class OctaGirl extends Component {
  render() {
    return (
      <View>
        <Image style={styles.img} source={{ uri: this.props.item.medium_profile_picture }}/>
        <Text>{`${this.props.item.first_name} ${this.props.item.last_name}`}</Text>
        <Text>{ this.props.item.country_residing }</Text>
        <Text>{ this.props.item.quote }</Text>
      </View>
    )
  }
};

const styles = StyleSheet.create({
  img: {
    width: 150,
    height: 150,
    alignSelf: 'center'
  }
})

export default OctaGirl