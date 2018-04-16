import React from 'react'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import store from '../store'

Enzyme.configure({ adapter: new Adapter() })

describe('Test action type', () => {
  it('test state', () => {
    const state = store.getState().octagirls
    expect(state).toBeDefined()
  })
  
  it('test OCTAGIRL_SUCCESS', () => {
    store.dispatch({
      type: 'OCTAGIRL_SUCCESS',
      octagirls: [{name: 'Xena'}]
    })
    const octagirl = store.getState().octagirls.octagirls
    // console.log(octagirl)
    expect(octagirl).not.toHaveLength(0)
  })
})

