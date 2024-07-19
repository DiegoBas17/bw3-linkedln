import { getCommentsAction } from "./getCommentsAction";
import { key } from "./getUserAction";

export const ADD_COMMENT = "ADD_COMMENT";

export const addCommentAction = (userId, comment) => {
  return async (dispatch) => {
    try {
      const resp = await fetch(
        `https://striveschool-api.herokuapp.com/api/comments/`,
        {
          method: "POST",
          body: JSON.stringify({
            comment: comment,
            rate: 1,
            elementId: userId,
          }),
          headers: {
            Authorization: "Bearer " + key,
            "Content-Type": "application/json",
          },
        }
      );
      if (resp.ok) {
        alert("Commento aggiunto con successo");
        dispatch({
          type: ADD_COMMENT,
          payload: {
            comment: comment,
            rate: 1,
            postId: userId,
          },
        });
        dispatch(getCommentsAction());
      } else {
        throw new Error("Errore nel riperimento dei dati");
      }
    } catch (error) {
      console.log("Errore", error);
    }
  };
};

export const deleteCommentAction = (elementId) => {
  return async (dispatch) => {
    try {
      const resp = await fetch(
        `https://striveschool-api.herokuapp.com/api/comments/` + elementId,
        {
          method: "DELETE",
          headers: {
            Authorization: "Bearer " + key,
            "Content-Type": "application/json",
          },
        }
      );
      if (resp.ok) {
        alert("Commento eliminato con successo");
        dispatch(getCommentsAction());
      } else {
        throw new Error("Errore nel riperimento dei dati");
      }
    } catch (error) {
      console.log("Errore", error);
    }
  };
};
