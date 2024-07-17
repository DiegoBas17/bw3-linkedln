import { API_KEY } from "./getUserAction";

export const GET_FETCH = "GET_FETCH";

/* fetch get per visualizzare i post*/
export const fetchPostNotizieAction = () => {
  return async (dispatch) => {
    try {
      const resp = await fetch(
        "https://striveschool-api.herokuapp.com/api/posts/",
        {
          headers: {
            Authorization: API_KEY,
          },
        }
      );
      if (resp.ok) {
        const arrayPost = await resp.json();
        dispatch({
          type: GET_FETCH,
          payload: arrayPost,
        });
      } else {
        throw new Error("Errore nel riperimento dei dati");
      }
    } catch (error) {
      console.log("Errore", error);
    }
  };
};
