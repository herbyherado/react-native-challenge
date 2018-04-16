import React from 'react'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import store from '../store'

Enzyme.configure({ adapter: new Adapter() })

describe('Test action type', () => {
  it('test state', () => {
    const state = store.getState().fighters
    expect(state).toBeDefined()
  })
  
  it('test FIGHTERS_SUCCESS', () => {
    store.dispatch({
      type: 'FIGHTERS_SUCCESS',
      fighters: [{name: 'Johnson'}]
    })
    const fighter = store.getState().fighters.fighters
    expect(fighter).not.toHaveLength(0)
  })
  it('test FIGHTERS_QUERY', () => {
    store.dispatch({
      type: 'FIGHTERS_QUERY',
      query: 'tes'
    })
    const query = store.getState().fighters.query
    expect(query).not.toHaveLength(0)
    expect(query).toEqual('tes')
  })

})

