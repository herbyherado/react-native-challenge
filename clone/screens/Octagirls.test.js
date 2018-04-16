import React, { Component } from 'react'
import enzyme, { shallow, mount } from 'enzyme'
import { Text, View, Image, FlatList } from 'react-native'
import Adapter from 'enzyme-adapter-react-16'
import renderer from 'react-test-renderer'

import OctaGirls from './Octagirls'
import OctaGirl from '../components/OctaGirl';
import CardTab from '../components/CardTab'
import store from '../store/store'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'

const mockStore = configureStore()
let initialState = {
  octagirls: []
}
let mstore
let wrapper

enzyme.configure({ adapter: new Adapter()})

beforeEach(() => {
  mstore = mockStore(initialState)
  wrapper = shallow(<Provider store={store}><OctaGirls/></Provider>)
})

// describe('Snapshot test <OctaGirls/>',()=>{
//   it('capturing Snapshot of OctaGirls', () => {
//       const renderedValue =  renderer.create(<Provider store={store}><OctaGirls/></Provider>).toJSON()
//       expect(renderedValue).toMatchSnapshot();
//   })
// })

describe('<OctaGirls/>', () => {
  it('should render <OctaGirls/>', () => {
    expect(wrapper).toBeDefined()
    expect(wrapper.length).toEqual(1)
  })
  it('should have components', () => {
    expect(wrapper.find(<View/>)).toBeDefined()
    expect(wrapper.find('Text')).toBeDefined()
    expect(wrapper.find('OctaGirl')).toBeDefined()
    expect(wrapper.find('FlatList')).toBeDefined()
  })
  it('should have props', () => {
    expect(wrapper.props('octagirls')).toEqual({})
  })
  // it('keyextractor', () => {
    expect(wrapper.dive().instance()).toEqual('y')
    // console.log(wrapper.instance().keyExtractor({id: '113'}, '4'))
    // let key = wrapper.instance().keyExtractor({id: '113'}, '4')
    // expect(key).toEqual('octa-113')
    // expect(OctaGirls.keyExt)
  // })
})

