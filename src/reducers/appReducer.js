import { types } from "../types"

const initialState = {}

export const appReducer = (state = initialState, action) => {

  switch(action.type) {
    case types.infoUdapte:
      return {
        ...state,
        place: action.payload.place,
        weatherStats: action.payload.weatherStats,
      }
    default: 
    return state
  }
}