import CurrencyData from '../../interfaces/CurrencyData';
export const GET_CRYPTO = 'GET_CRYPTO';
export const SET_ERROR = 'SET_ERROR';

export const getCrypto = (assetKey: string, cryptos: CurrencyData[]) => {
  return async dispatch => {
    try {
      const res = await fetch(
        `https://data.messari.io/api/v1/assets/${assetKey}/metrics`,
      );
      const data = await res.json();
      const exists = cryptos.filter(crypto => crypto.data.id === data.data.id);
      if (exists.length > 0) {
        throw new Error('You already added this crypto');
      }

      dispatch({
        type: GET_CRYPTO,
        payload: data,
      });
    } catch (error) {
      dispatch(setError(error.message));
    }
  };
};

const setError = (err: string) => {
  return {
    type: SET_ERROR,
    payload: err,
  };
};
