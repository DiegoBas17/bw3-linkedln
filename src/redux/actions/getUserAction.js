export const GET_USER = "GET_USER";

export const getUserAction = () => {
  return async (dispatch) => {
    try {
      let resp = await fetch("https://striveschool-api.herokuapp.com/api/profile/me");
      if (resp.ok) {
        let { data } = await resp.json();
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
