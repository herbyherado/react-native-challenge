import React, { Component } from 'react'
import enzyme, { shallow, mount } from 'enzyme'
import { View, TextInput, StyleSheet } from 'react-native'
import Adapter from 'enzyme-adapter-react-16'
import SearchBar from './SearchBar'

enzyme.configure({ adapter: new Adapter()})

let wrapper
let mockData
let styles

beforeEach(() => {
  styles = StyleSheet.create({
    bar: {
      height: 30, 
      width: 200, 
      borderColor: 'gray', 
      borderBottomWidth: 1, 
      marginTop: 20, 
      marginBottom: 30, 
      paddingBottom: 5
    }
  })
  wrapper = shallow(<SearchBar/>)
})

describe('<SearchBar/>', () => {
  it('should render <SearchBar/>', () => {
    expect(wrapper).toBeDefined()
  })
})

describe('<SearchBar/> has children', () => {
  it('<SearchBar/> should have 1 direct children', () => {
    expect(wrapper.children()).toHaveLength(1)
  })
})

describe('<SearchBar /> child is rendered', () => {
  it('should render <SearchBar/> child elements', () => {
    expect(wrapper.find(<View/>)).toBeDefined()
    expect(wrapper.find('View').length).toBe(1)
    expect(wrapper.find(<TextInput/>)).toBeDefined()
    expect(wrapper.find('TextInput').length).toBe(1)
  })
})

describe('<TextInput/> attributes', () => {
  it('<TextInput/> attributes should include', () => {
    expect(wrapper.find('TextInput').props()).toHaveProperty('onChangeText')
    expect(wrapper.find('TextInput').props()).toHaveProperty('defaultValue')
    expect(wrapper.find('TextInput').props()).toHaveProperty('placeholder')
    expect(wrapper.find('TextInput').props().placeholder).toBe('Search...')
  })
})
