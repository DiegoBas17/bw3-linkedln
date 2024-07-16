export const GET_USER = "GET_USER";

const URL_USER = "https://striveschool-api.herokuapp.com/api/profile/me";
const API_KEY =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Njk1MjM2MjE5NmQ3YjAwMTVkNmI1NDQiLCJpYXQiOjE3MjEwNDk5NTQsImV4cCI6MTcyMjI1OTU1NH0.YKb8dmYLUWdEdqTX3omCFl9hv8jDhv6f_y1YHwvbwrM";

export const getUserAction = () => {
  return async (dispatch) => {
    try {
      let resp = await fetch(URL_USER, {
        headers: {
          Authorization: API_KEY,
        },
      });
      if (resp.ok) {
        let data = await resp.json();
        dispatch({
          type: GET_USER,
          payload: data,
        });
      } else {
        throw new Error("Errore nel riperimento dei dati");
      }
    } catch (error) {
      console.log("Errore", error);
    }
  };
};
