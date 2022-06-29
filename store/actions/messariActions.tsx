export const GET_CRYPTO = 'GET_CRYPTO';

export const getCrypto = (assetKey: string) => {
  return async dispatch => {
    try {
      const res = await fetch(
        `https://data.messari.io/api/v1/assets/${assetKey}/metrics`,
      );
      const data = await res.json();
      dispatch({
        type: GET_CRYPTO,
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
