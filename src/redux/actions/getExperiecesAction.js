import { key } from "./getUserAction";

export const GET_EXPERIENCES = "GET_EXPERIENCES";
/* const myId = "66952362196d7b0015d6b544/"; */
const experiences = "experiences/";

export const getExperiencesAction = (id) => {
  return async (dispatch) => {
    try {
      let resp = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/${id}/${experiences}`,
        {
          headers: {
            Authorization: "Bearer " + key,
          },
        }
      );
      if (resp.ok) {
        let experiences = await resp.json();
        dispatch({
          type: GET_EXPERIENCES,
          payload: experiences,
        });
      } else {
        throw new Error("Errore nel riperimento dei dati");
      }
    } catch (error) {
      console.log("Errore", error);
    }
  };
};
