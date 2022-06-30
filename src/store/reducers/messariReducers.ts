import {GET_CRYPTO} from '../actions/messariActions';

const initialState = {
  cryptos: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_CRYPTO:
      return {
        ...state,
        cryptos: [...state.cryptos, action.payload],
      };
    default:
      return state;
  }
};
