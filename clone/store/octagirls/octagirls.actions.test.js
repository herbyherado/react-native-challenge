import configureStore from 'redux-mock-store'
import React from 'react'
import Adapter from 'enzyme-adapter-react-16'
import thunk from 'redux-thunk'

import { getOctagirls } from '../octagirls/octagirls.actions'

const middlewares = [thunk]
const mockStore = configureStore(middlewares)
const store = mockStore({})

describe('test action getOctagirls', () => {
  it('should fetch octagirls', async() => {
    const res = await store.dispatch(getOctagirls())
    const actions = store.getActions()
    expect(actions[0].type).toEqual('OCTAGIRL_SUCCESS')
    expect(actions[0].octagirls).not.toHaveLength(0)
  })
})