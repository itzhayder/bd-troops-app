import axios from 'axios';
import * as actionTypes from './types/actionTypes';
import { baseURL } from '../../config/config';

const fetchData = () => async (dispatch) => {
  dispatch({ type: actionTypes.fetchStart });

  try {
    const res = await axios.get(baseURL);

    dispatch({ type: actionTypes.fetchCompleted, payload: res.data });
  } catch (error) {
    dispatch({ type: actionTypes.fetchError, payload: error });
  }
}

export default fetchData;