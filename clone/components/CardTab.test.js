import React, { Component } from 'react'
import enzyme, { shallow, mount } from 'enzyme'
import { Text, View, TouchableHighlight } from 'react-native'
import Adapter from 'enzyme-adapter-react-16'
import CardTab from './CardTab'
import renderer from 'react-test-renderer'

enzyme.configure({ adapter: new Adapter()})

let wrapper

beforeEach(() => {
  wrapper = shallow(<CardTab press={ this.toFighters } text={'Fighters'}/>)
})

describe('<CardTab/>', () => {
  it('should render <CardTab/>', () => {
    expect(wrapper).toBeDefined()
  })
})

describe('<CardTab/> child is rendered', () => {
  it('Should render <TouchableHighlight />', () => {
    expect(wrapper.find(<TouchableHighlight/>)).toBeDefined()
    expect(wrapper.find('TouchableHighlight').length).toBe(1)
    expect(wrapper.find(<TouchableHighlight/>).children()).toBeDefined()
  })
  it('Should render <View/>', () => {
    expect(wrapper.find(<View/>)).toBeDefined()
    expect(wrapper.find('View').length).toBe(1)  
  })
  it('Should render <Text/>', () => {
    expect(wrapper.find(<Text/>)).toBeDefined()
    expect(wrapper.find('Text').length).toBe(1)
  })
})

describe('<CardTab/> props are set', () => {
  it('Should set props in each <CardTab/>', () => {
    expect(wrapper.props()).toBeDefined()
  })
})

describe('<CardTab/> attributes should be rendered', () => {
  it('Should have the expected attributes', () => {
    expect(wrapper.find('Text').at(0).props()).toHaveProperty('style')
    expect(wrapper.find('View').at(0).props()).toHaveProperty('style')
    expect(wrapper.find('TouchableHighlight').at(0).props()).toHaveProperty('onPress')
  })
})

describe('snapshot testing', () => {
  it('snapshot', () => {
    const tree = renderer.create(<CardTab/>)
    expect(tree).toMatchSnapshot()
  })
})
