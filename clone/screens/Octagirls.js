import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Text, View, FlatList, Image, StyleSheet } from 'react-native';
import OctaGirl from '../components/OctaGirl'

class Octagirls extends Component {

  keyExtractor = (item, index) => `octa-${item.id}`

  renderItem = ({ item }) => (<OctaGirl item={ item }/>)

  render () {
    return (
      <View style={ styles.container }>
        { (this.props.octagirls.length) ?
          <Text> No Data </Text> 
          :
          <FlatList
            data={ this.props.octagirls.octagirls }
            renderItem={ this.renderItem }
            keyExtractor={ this.keyExtractor }
          />
        }
      </View>
    )
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#fff',
    alignItems: 'center',
  }
});

function mapStateToProps (state) {
  return {
    octagirls: state.octagirls
  }
}

export default connect(mapStateToProps, null)(Octagirls)
