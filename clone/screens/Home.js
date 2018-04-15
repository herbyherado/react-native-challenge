import React, { Component } from 'react';
import { View, Text, TouchableHighlight, StyleSheet, Image, ImageBackground } from 'react-native'
import { StackNavigator } from 'react-navigation'
import { connect } from 'react-redux'
import { getFighters } from '../store/fighters/fighter.actions'
import { getOctagirls } from '../store/octagirls/octagirls.actions'
import CardTab from '../components/CardTab'
import Logo from '../components/Logo'

class Home extends Component {
  render() {
    return (
      <View style={styles.wrapper}>
        <Logo />
        <CardTab press={ () => this.props.navigation.navigate('Fighters') } text={'Fighters'} />
        <CardTab press={ () => this.props.navigation.navigate('Octagirls') } text={'Octagon Girls'} />
      </View>
    )
  }
  componentDidMount () {
    this.props.loadFighters()
    this.props.loadOctagirls()
  }
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#303030',
    width: '100%',
    paddingTop: 20
  }
})

function mapDispatchToProps (dispatch) {
  return {
    loadFighters: () => dispatch(getFighters()),
    loadOctagirls: () => dispatch(getOctagirls())
  }
}

export default connect(null, mapDispatchToProps)(Home)
