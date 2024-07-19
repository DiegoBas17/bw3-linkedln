import { getCommentsAction } from "./getCommentsAction";
import { key } from "./getUserAction";

export const ADD_COMMENT = "ADD_COMMENT";

export const addCommentAction = (userId, comment) => {
  return async (dispatch) => {
    try {
      const resp = await fetch(`https://striveschool-api.herokuapp.com/api/comments/`, {
        method: "POST",
        body: JSON.stringify(comment),
        headers: {
          Authorization: "Bearer" + key,
          "Content-Type": "application/json",
        },
      });
      if (resp.ok) {
        alert("Commento aggiunto con successo");
        dispatch({
          type: ADD_COMMENT,
          payload: comment,
        });
        dispatch(getCommentsAction(userId));
      } else {
        throw new Error("Errore nel riperimento dei dati");
      }
    } catch (error) {
      console.log("Errore", error);
    }
  };
};
