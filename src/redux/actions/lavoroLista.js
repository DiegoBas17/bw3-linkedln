import { key } from "./getUserAction";

export const GET_LAVORO = "GET_LAVORO";
export const SEARCH_LAVORO = "SEARCH_LAVORO";

export const fetchLavoro = () => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        "https://strive-benchmark.herokuapp.com/api/jobs",
        {
          headers: {
            Authorization: "Bearer " + key,
          },
        }
      );

      if (response.ok) {
        const lavori = await response.json();
        dispatch({
          type: GET_LAVORO,
          playload: lavori.data,
        });
      } else {
        throw new Error("Errore nel reperimento dei dati");
      }
    } catch (error) {
      console.log("Error", error);
    }
  };
};
