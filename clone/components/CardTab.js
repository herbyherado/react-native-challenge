import React, { Component } from 'react'
import { Text, View, TouchableHighlight, StyleSheet } from 'react-native' 

class CardTab extends Component {
  render() {
    return (
      <TouchableHighlight onPress = { this.props.press }>
        <View style={styles.card}> 
          <Text style={styles.cardText} > { this.props.text }</Text>
        </View>
      </TouchableHighlight>  
    )
  }
};

const styles = StyleSheet.create({
  card: {
    marginTop: 20,
    alignItems: 'center',
    alignSelf: 'center',
    padding: 30,
    width: '95%',
    borderWidth: 1,
    borderBottomColor: 'silver',
    borderTopColor: 'silver'
  },
  cardText: {
    color: '#fff',
    fontSize: 30,
    backgroundColor: 'transparent'
  },
})

export default CardTab