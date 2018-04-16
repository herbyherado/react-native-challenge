import { OCTAGIRL_SUCESS } from './octagirls.actionType'

const initialState = {
  octagirls: []
}

const reducers = (state=initialState, action) => {
  switch(action.type) {
    case OCTAGIRL_SUCESS:
      console.log('apa aja')
      return {
        ...state,
        octagirls: action.octagirls
      }
    default:
      return state
  }
}

export default reducers