import { key } from "./getUserAction";

export const GET_FETCH = "GET_FETCH";

/* fetch get per visualizzare i post*/
export const fetchPostNotizieAction = () => {
  return async (dispatch) => {
    try {
      const resp = await fetch(
        "https://striveschool-api.herokuapp.com/api/posts/",
        {
          headers: {
            Authorization: "Bearer " + key,
          },
        }
      );
      if (resp.ok) {
        const arrayPost = await resp.json();
        const primiVentiPost = arrayPost.toReversed().slice(0, 20);
        dispatch({
          type: GET_FETCH,
          payload: primiVentiPost,
        });
      } else {
        throw new Error("Errore nel riperimento dei dati");
      }
    } catch (error) {
      console.log("Errore", error);
    }
  };
};
