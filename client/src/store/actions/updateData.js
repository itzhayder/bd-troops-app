import * as actionTypes from './types/actionTypes'

export const updateClanInfo = newData => dispatch => {
  dispatch({ type: actionTypes.clanInfoUpdated, payload: newData });
}

export const updateCurrentWar = newData => dispatch => {
  dispatch({ type: actionTypes.currentWarUpdated, payload: newData });
}