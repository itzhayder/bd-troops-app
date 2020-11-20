import * as actionTypes from '../actions/types/actionTypes';

const initial = {
  data: null,
  loading: true,
  error: null,
};

const dataReducer = (state = initial, action) => {
  switch (action.type) {
    case actionTypes.fetchStart:
      return { ...state, data: null, loading: true, error: null };

    case actionTypes.fetchCompleted:
      return { ...state, data: action.payload, loading: false, error: null };

    case actionTypes.fetchError:
      return { ...state, data: null, loading: false, error: action.payload };

    case actionTypes.clanInfoUpdated:
      return { ...state, data: { ...state.data, clanInfo: { ...state.data.clanInfo, ...action.payload } }, loading: false, error: null};

    case actionTypes.currentWarUpdated:
      return { ...state, data: { ...state.data, currentWar: { ...state.data.currentWar, ...action.payload } }, loading: false, error: null};

    default:
      return state;
  }
}

export default dataReducer;