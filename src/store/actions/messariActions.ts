import CurrencyData from '../../interfaces/CurrencyData';
export const GET_CRYPTO = 'GET_CRYPTO';
export const SET_ERROR = 'SET_ERROR';
export const UPDATE_CRYPTO = 'UPDATE_CRYPTO';
export const DELETE_CRYPTO = 'DELETE_CRYPTO';

export const getCrypto = (assetKey: string, cryptos: CurrencyData[]) => {
  return async dispatch => {
    try {
      const res = await fetch(
        `https://data.messari.io/api/v1/assets/${assetKey}/metrics`,
        {
          headers: {
            'x-messari-api-key': '3869500c-f5a4-4afb-bc4e-84595bf38466',
          },
        },
      );
      if (!res.ok) {
        throw new Error('That crypto does not exist');
      }
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

export const updateCryptos = () => {
  return async (dispatch, getState) => {
    const state = getState();
    const cryptos = state.cryptos.cryptos;

    try {
      const res = await fetch(
        'https://data.messari.io/api/v2/assets?fields=id,name,symbol,metrics/market_data',
        {
          headers: {
            'x-messari-api-key': '3869500c-f5a4-4afb-bc4e-84595bf38466',
          },
        },
      );
      const data = await res.json();

      const allCryptoList: CurrencyData[] = data.data.map(item => {
        const currency: CurrencyData = {
          data: {
            id: item.id,
            name: item.name,
            symbol: item.symbol,
            market_data: {
              price_usd: item.metrics.market_data.price_usd,
              percent_change_usd_last_24_hours:
                item.metrics.market_data.percent_change_usd_last_24_hours,
            },
          },
        };
        return currency;
      });

      const updatedCurrenciesList: CurrencyData[] = cryptos.map(cryp => {
        const result = allCryptoList.filter(
          item => item.data.id === cryp.data.id,
        )[0];
        return result;
      });

      dispatch({
        type: UPDATE_CRYPTO,
        payload: updatedCurrenciesList,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const deleteCrypto = id => {
  return dispatch => {
    dispatch({
      type: DELETE_CRYPTO,
      payload: id,
    });
  };
};
