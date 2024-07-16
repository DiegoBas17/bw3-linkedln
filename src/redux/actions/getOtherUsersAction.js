import { API_KEY, URL_USER } from "./getUserAction";

export const GET_OTHER_USERS = "GET_OTHER_USERS";

export const getOtherUsersAction = () => {
  return async (dispatch) => {
    try {
      let resp = await fetch(URL_USER, {
        headers: {
          Authorization: API_KEY,
        },
      });
      if (resp.ok) {
        let users = await resp.json();

        dispatch({
          type: GET_OTHER_USERS,
          payload: users,
        });
      } else {
        throw new Error("Errore nel riperimento dei dati");
      }
    } catch (error) {
      console.log("Errore", error);
    }
  };
};
