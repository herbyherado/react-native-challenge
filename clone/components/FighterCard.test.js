import React, { Component } from 'react'
import enzyme, { shallow, mount } from 'enzyme'
import { Text, View, TouchableHighlight, Image } from 'react-native'
import Adapter from 'enzyme-adapter-react-16'
import FighterCard from './FighterCard'
import renderer from 'react-test-renderer'

enzyme.configure({ adapter: new Adapter()})

let wrapper
let mockItem

beforeEach(() => {

  goToDetail = (fighter) => {
    this.props.navigation.navigate('FighterStats', { title: `${fighter.first_name} ${fighter.last_name}`, data: fighter })
  }

  mockItem = {
    id: '1161',
    first_name: 'Demetrious',
    last_name: 'Johnson',
    nickname: 'Mighty Mouse',
    weight_class: 'Flyweight',
    wins: 27,
    losses: 2,
    right_full_body_image: 'http://imagec.ufc.com/http%253A%252F%252Fmedia.ufc.tv%252Ffighter_images%252FDemitrious_Johnson%252FJOHNSON_DEMETRIOUS_L_BELT_S.png?mh530'
  }

  wrapper = shallow(<FighterCard 
    fighter={mockItem}
    press={ () => this.goToDetail(mockItem) } 
    key={`fighter-${mockItem.id}`}
  />)
})

describe('snapshot testing', () => {
  it('snapshot', () => {
    const tree = renderer.create(<FighterCard fighter={mockItem}
      press={ () => this.goToDetail(mockItem) } 
      key={`fighter-${mockItem.id}`}/>)
    expect(tree).toMatchSnapshot()
  })
})

describe('<FighterCard/>', () => {
  it('should render <FighterCard/>', () => {
    expect(wrapper).toBeDefined()
  })
})

describe('<FighterCard /> child is rendered', () => {
  it('should render <FighterCard/> child elements', () => {
    expect(wrapper.find(<TouchableHighlight/>)).toBeDefined()
    expect(wrapper.find('TouchableHighlight').length).toBe(1)
    expect(wrapper.find(<TouchableHighlight/>).children()).toBeDefined()
    expect(wrapper.find(<View/>)).toBeDefined()
    expect(wrapper.find('View').length).toBe(1)
    expect(wrapper.find(<Text/>)).toBeDefined()
    expect(wrapper.find('Text').length).toBe(3)
    expect(wrapper.find(<Image/>)).toBeDefined()
    expect(wrapper.find('Image').length).toBe(1)
  })
})

describe('Text props should return true', () => {
  it('should return text as expected', () => {
    expect(wrapper.find('Text').at(0).props().children.join('')).toContain('Name: Demetrious Johnson')
    expect(wrapper.find('Text').at(1).props().children.join('')).toContain('Wins: 27')
    expect(wrapper.find('Text').at(2).props().children.join('')).toContain('Losses: 2')
  })
})

