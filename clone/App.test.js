import React, { Component } from 'react';
import App from './App';
import Home from './screens/Home'
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux'
import store from './store/store'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { StackNavigator } from 'react-navigation'

configure ({ adapter: new Adapter() })

let wrapper

beforeEach(() => {
  wrapper = shallow(<Provider store={ store }><RootStack/> </Provider>)
})

test('Should render <App />', () => {
  // const render = renderer.create(<Provider store={ store }><RootStack/> </Provider>).toJSON()
  // expect(render).toBeTruthy()
  expect(wrapper).toBeDefined()
})