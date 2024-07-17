import { API_KEY, URL_USER } from "./getUserAction";

export const ADD_EXPERIENCE = "ADD_EXPERIENCE";
const myId = "66952362196d7b0015d6b544/";
const experiences = "experiences";

export const addExperienceAction = (value) => {
  return async () => {
    try {
      const resp = await fetch(URL_USER + myId + experiences, {
        method: "POST",
        body: JSON.stringify(value),
        headers: {
          "Content-Type": "application/json",
          Authorization: API_KEY,
        },
      });
      if (resp.ok) {
        console.log(resp);
      } else {
        throw new Error("Errore nel riperimento dei dati");
      }
    } catch (error) {
      console.log("Errore", error);
    }
  };
};
