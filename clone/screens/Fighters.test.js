import React, { Component } from 'react'
import enzyme, { shallow, mount } from 'enzyme'
import { Text, View, Image } from 'react-native'
import Adapter from 'enzyme-adapter-react-16'
import renderer from 'react-test-renderer'

import Fighters from './Fighters'
import SearchBar from '../components/SearchBar'
import FighterCard from '../components/FighterCard'

import store from '../store/store'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import { searchFighters, getFighters } from '../store/fighters/fighter.actions'

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
  wrapper = shallow(<Provider store={store}><Fighters/></Provider>)
})

describe('Snapshot test <Fighters/>',()=>{
  it('capturing Snapshot of Fighters', () => {
      const renderedValue =  renderer.create(<Provider store={store}><Fighters/></Provider>).toJSON()
      expect(renderedValue).toMatchSnapshot();
  })
})

describe('<Fighters/>', () => {
  it('should render <Fighters/>', () => {
    expect(wrapper).toBeDefined()
    expect(wrapper.length).toEqual(1)
  })
  it('should have components', () => {
    expect(wrapper.find('View')).toBeDefined()
    expect(wrapper.find('SearchBar')).toBeDefined()
    expect(wrapper.find('Text')).toBeDefined()
    expect(wrapper.find('FighterCard')).toBeDefined()
  })
})

// it('+++ check action on dispatching ', () => {
//   let action
//   // store.dispatch(searchFighters('hello'))
//   action = mstore.getActions()
//   console.log(action)
//   // expect(wrapper.find(Fighters).prop('query')).toBe('hello')
//   const q = searchFighters('hello')
//   expect(q).toEqual({type:"FIGHTERS_QUERY", query: 'hello'})
//   // expect(action.type).toBe("FIGHTERS_QUERY")
// });