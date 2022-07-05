import {GET_CRYPTO, SET_ERROR, UPDATE_CRYPTO} from '../actions/messariActions';

const initialState = {
  cryptos: [],
  error: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_CRYPTO:
      return {
        ...state,
        cryptos: [...state.cryptos, action.payload],
        error: '',
      };
    case SET_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case UPDATE_CRYPTO:
      return {
        ...state,
        cryptos: action.payload,
      };
    default:
      return state;
  }
};
