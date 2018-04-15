import React, { Component } from 'react';
import { Text, View, TouchableHighlight, Image, StyleSheet } from 'react-native'


class FighterCard extends Component {
  render() {
    let fighter = this.props.fighter
    console.log(fighter)
    return (
      <TouchableHighlight onPress={ this.props.press }>
        <View>
          <Image style={styles.img} source={{ uri: fighter.profile_image }} />
          <Text> Name: { `${fighter.first_name} ${fighter.last_name}` } </Text>
          <Text> Wins: { fighter.wins } </Text>
          <Text> Losses: { fighter.losses } </Text>
        </View>
      </TouchableHighlight>
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
export default FighterCard