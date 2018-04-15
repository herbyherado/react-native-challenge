import React, { Component } from 'react'
import enzyme, { shallow, mount } from 'enzyme'
import { Text, View, Image } from 'react-native'
import Adapter from 'enzyme-adapter-react-16'
import FighterProfile from './FighterProfile'
import renderer from 'react-test-renderer'

enzyme.configure({ adapter: new Adapter()})

let wrapper
let mockData

beforeEach(() => {
  mockData = {
    id: '1161',
    first_name: 'Demetrious',
    last_name: 'Johnson',
    nickname: 'Mighty Mouse',
    weight_class: 'Flyweight',
    wins: 27,
    losses: 2,
    right_full_body_image: 'http://imagec.ufc.com/http%253A%252F%252Fmedia.ufc.tv%252Ffighter_images%252FDemitrious_Johnson%252FJOHNSON_DEMETRIOUS_L_BELT_S.png?mh530'
  }

  wrapper = shallow(<FighterProfile stat={ mockData }/>)
})

describe('snapshot testing', () => {
  it('snapshot', () => {
    const tree = renderer.create(<FighterProfile stat={ mockData }/>)
    expect(tree).toMatchSnapshot()
  })
})

describe('<FighterProfile/>', () => {
  it('should render <FighterProfile/>', () => {
    expect(wrapper).toBeDefined()
  })
})

describe('Image should be inserted', () => {
  it('should have source in <Image/>', () => {
    expect(wrapper.find('Image').props()).toHaveProperty('source')
    expect(wrapper.find('Image').props()).toHaveProperty('style')
    expect(wrapper.find('Image').filterWhere((item) => {
      return item.source === mockData.right_full_body_image
    }))
  })
})

describe('Text props should return true', () => {
  it('should return text as expected', () => {
    expect(wrapper.find('Text').at(0).props().children).toContain(mockData.nickname)
    expect(wrapper.find('Text').at(1).props().children).toContain(mockData.weight_class)
  })
})

describe('<FighterProfile /> child is rendered', () => {
  it('should render <FighterProfile/> child elements', () => {
    expect(wrapper.find(<View/>)).toBeDefined()
    expect(wrapper.find('View').length).toBe(1)
    expect(wrapper.find(<Text/>)).toBeDefined()
    expect(wrapper.find('Text').length).toBe(2)
    expect(wrapper.find(<Image/>)).toBeDefined()
    expect(wrapper.find('Image').length).toBe(1)
  })
})
