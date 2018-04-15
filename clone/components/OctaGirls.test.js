import React, { Component } from 'react'
import enzyme, { shallow, mount } from 'enzyme'
import { Text, View, Image } from 'react-native'
import Adapter from 'enzyme-adapter-react-16'
import OctaGirl from './OctaGirl'
import renderer from 'react-test-renderer'

enzyme.configure({ adapter: new Adapter()})

let wrapper
let mockData

beforeEach(() => {
  mockData = {
    id: '6638',
    first_name: 'Arianny',
    last_name: 'Celeste',
    country_residing: 'USA',
    quote: 'The best part of the job is the whole experience.',
    medium_profile_picture: 'http://media.ufc.tv//fighter_images/Octagon_Girls/Arianny_MediumProfile.jpg',
  }

  wrapper = shallow(<OctaGirl item={ mockData }/>)
})

describe('snapshot testing', () => {
  it('snapshot', () => {
    const tree = renderer.create(<OctaGirl item={ mockData }/>)
    expect(tree).toMatchSnapshot()
  })
})

describe('<OctaGirl/>', () => {
  it('should render <OctaGirl/>', () => {
    expect(wrapper).toBeDefined()
  })
})

describe('Image should be inserted', () => {
  it('should have source in <Image/>', () => {
    expect(wrapper.find('Image').filterWhere((item) => {
      return item.source === mockData.medium_profile_picture
    }))
  })
})

describe('Text props should return true', () => {
  it('should return text as expected', () => {
    expect(wrapper.find('Text').at(0).props().children).toEqual('Arianny Celeste')
    expect(wrapper.find('Text').at(1).props().children).toContain('USA')
    expect(wrapper.find('Text').at(2).props().children).toContain('The best part of the job is the whole experience.')
  })
})

describe('<OctaGirl /> child is rendered', () => {
  it('should render <OctaGirl/> child elements', () => {
    expect(wrapper.find(<View/>)).toBeDefined()
    expect(wrapper.find('View').length).toBe(1)
    expect(wrapper.find(<Text/>)).toBeDefined()
    expect(wrapper.find('Text').length).toBe(3)
    expect(wrapper.find(<Image/>)).toBeDefined()
    expect(wrapper.find('Image').length).toBe(1)
  })
})
