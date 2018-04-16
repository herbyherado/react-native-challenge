import { OCTAGIRL_SUCESS } from './octagirls.actionType'
import axios from 'axios'

export const getOctagirls = () => {
  return dispatch => {
    return axios.get('http://ufc-data-api.ufc.com/api/v3/iphone/octagon_girls')
      .then(resp => {
        // console.log(resp)
        dispatch(getOctagirlsSuccess(resp.data))
        return resp
      })
      .catch(err => {
        // console.log(err)
      })
  }
}

const getOctagirlsSuccess = (payload) => ({
  type: OCTAGIRL_SUCESS,
  octagirls: payload
})
