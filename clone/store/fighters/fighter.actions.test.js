import configureStore from 'redux-mock-store'
import React from 'react'
import Adapter from 'enzyme-adapter-react-16'
import thunk from 'redux-thunk'

import { getFighters, searchFighters } from '../fighters/fighter.actions'

const middlewares = [thunk]
const mockStore = configureStore(middlewares)
const store = mockStore({})

describe('test action getFighters', () => {
  it('should fetch getFighters', async() => {
    const res = await store.dispatch(getFighters())
    const actions = store.getActions()
    expect(actions[0].type).toEqual('FIGHTERS_SUCCESS')
    expect(actions[0].fighters).not.toHaveLength(0)
  })
})

describe('test action searchFighters', () => {
  it('should fetch searchFighters', async() => {
    const res = await store.dispatch(searchFighters())
    const actions = store.getActions()
    expect(actions[1].type).toEqual('FIGHTERS_QUERY')
    expect(actions[1].query).toBe(undefined)
  })
})