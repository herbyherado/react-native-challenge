import React, { Component } from 'react'
import enzyme, { shallow, mount } from 'enzyme'
import { Text, View, Image } from 'react-native'
import Adapter from 'enzyme-adapter-react-16'
import Home from './Home'
import renderer from 'react-test-renderer'
import Logo from '../components/Logo'
import CardTab from '../components/CardTab'
import store from '../store/store'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import { searchFighters } from '../store/fighters/fighter.actions'

const mockStore = configureStore()
const initialState = {
  fighters: [],
  query: ''
}
enzyme.configure({ adapter: new Adapter()})

let mstore
let wrapper

beforeEach(() => {
  mstore = mockStore(initialState)
  wrapper = shallow(<Provider store={store}><Home/></Provider>)
})

describe('Snapshot test <Home/>',()=>{
  it('capturing Snapshot of Home', () => {
      const renderedValue =  renderer.create(<Provider store={store}><Home/></Provider>).toJSON()
      expect(renderedValue).toMatchSnapshot();
  })
})

describe('<Home/>', () => {
  it('should render <Home/>', () => {
    expect(wrapper).toBeDefined()
    expect(wrapper.length).toEqual(1)
  })
  it('should have components', () => {
    expect(wrapper.find(<View/>)).toBeDefined()
    expect(wrapper.find('Logo')).toBeDefined()
    expect(wrapper.find('CardTab')).toBeDefined()
  })
})

describe('Redux check <Home/>', () => {
  it('check props for <Home/>', () => {
    expect(wrapper.prop('output')).toEqual(initialState.output)
  })
})

describe('<CardTab/> should be pressable', () => {
  it('tab should be pressable', () => {
    let mockCallBack = jest.fn()
    let wrap = shallow(<CardTab press={ () => mockCallBack } text={'Fighters'} />)
    wrap.find('TouchableHighlight').props().onPress()
    expect(mockCallBack.mock.calls.length).toEqual(0)
    expect(wrap.props()).toHaveProperty('onPress')
  })
})

describe('<Home/> should render instance', () => {
  it('should render navigate instances', () => {
    let inst = wrapper.instance()
    expect(inst.props).toBeTruthy()
  })
})
