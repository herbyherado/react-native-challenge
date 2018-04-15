import React, { Component } from 'react'
import enzyme, { shallow } from 'enzyme'
import { View, Image, StyleSheet } from 'react-native'
import Adapter from 'enzyme-adapter-react-16'
import Logo from './Logo'
import renderer from 'react-test-renderer'

enzyme.configure({ adapter: new Adapter()})

let wrapper
let styles

beforeEach(() => {
  wrapper = shallow(<Logo/>)
  styles = StyleSheet.create({
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
})

describe('<Logo/>', () => {
  it('should render <Logo/>', () => {
    expect(wrapper).toBeDefined()
  })
})
describe('Image should be inserted', () => {
  it('should have source in <Image/>', () => {
    expect(wrapper.find('Image').filterWhere((item) => {
      return item.source === './assets/UFC_Logo.png'
    }))
  })
})
describe('<Logo/> has children', () => {
  it('<Logo/> should have 1 direct children', () => {
    expect(wrapper.children()).toHaveLength(1)
  })
})
describe('<Logo/> child should be rendered', () => {
  it('Should render <Logo /> with its children', () => {
    expect(wrapper.find(<View/>)).toBeDefined()
    expect(wrapper.find('View').length).toBe(1)
    expect(wrapper.find(<Image style={ styles.image } source={require('./assets/UFC_Logo.png')}/>)).toBeDefined()
    expect(wrapper.find('Image').length).toBe(1)
  })
})

describe('snapshot testing', () => {
  it('snapshot', () => {
    const tree = renderer.create(<Logo/>)
    expect(tree).toMatchSnapshot()
  })
})