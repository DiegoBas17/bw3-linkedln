import { key } from "./getUserAction";
import { SEARCH_LAVORO } from "./lavoroLista";

export const searchJobAction = (query) => {
  return async (dispatch) => {
    try {
      const resp = await fetch(
        "https://strive-benchmark.herokuapp.com/api/jobs?search=" +
          query +
          "&limit=20",
        {
          headers: {
            Authorization: "Bearer " + key,
          },
        }
      );
      if (resp.ok) {
        const lavoro = await resp.json();
        dispatch({
          type: SEARCH_LAVORO,
          payload: lavoro.data,
        });
      } else {
        throw new Error("Errore nel reperimento dei dati");
      }
    } catch (error) {
      console.log("Errore", error);
    }
  };
};
