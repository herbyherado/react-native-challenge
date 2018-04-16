import { combineReducers } from 'redux'
import Fighter from './fighters/fighter.reducer'
import Octagirl from './octagirls/octagirls.reducer'

const reducers = combineReducers({
  fighters: Fighter,
  octagirls: Octagirl
})

export default reducers