import { key } from "./getUserAction";

export const GET_COMMENTS = "GET_COMMENTS";

export const getCommentsAction = () => {
  return async (dispatch) => {
    try {
      const resp = await fetch(`https://striveschool-api.herokuapp.com/api/comments/`, {
        headers: {
          Authorization: key,
        },
      });
      if (resp.ok) {
        let comments = await resp.json();
        console.log(comments);
        dispatch({
          type: GET_COMMENTS,
          payload: comments,
        });
      } else {
        throw new Error("Errore nel riperimento dei dati");
      }
    } catch (error) {
      console.log("Errore", error);
    }
  };
};
