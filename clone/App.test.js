import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { StackNavigator } from 'react-navigation'
import React from 'react';
import App from './App';
// import renderer from 'react-test-renderer';
import { Provider } from 'react-redux'
import store from './store/store'

configure ({ adapter: new Adapter() })

let wrapper

beforeEach(() => {
  wrapper = shallow(<Provider store={ store }><RootStack /> </Provider>)
})

test('Should render <App />', () => {
  expect(wrapper).toBeDefined()
})