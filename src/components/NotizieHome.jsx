import { useEffect, useState } from "react";

const NotizieHome = () => {
  const [arrayPostNotizie, setArrayPostNotizie] = useState([]);
  /* fetch */
  const fetchPostNotizie = () => {
    fetch("https://striveschool-api.herokuapp.com/api/posts/", {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTRkZjAxMDI1NGU4ODAwMTgzZjE4YTQiLCJpYXQiOjE3MjExMTkyODQsImV4cCI6MTcyMjMyODg4NH0.YZBDRl2AhUU1wa_bH7Ulw5I8y7CttiaOcBEXKE7rRnA",
      },
    })
      .then((resp) => {
        if (resp.ok) {
          return resp.json();
        } else {
          throw new Error("Errore nel reperimento dei commenti");
        }
      })
      .then((arrayPostNotizie) => {
        setArrayPostNotizie(arrayPostNotizie);
      })
      .catch((err) => alert(err));
  };
  useEffect(() => {
    fetchPostNotizie();
  }, []);

  return (
    <div>
      {arrayPostNotizie.map((post, index) => {
        return (
          <div
            key={index}
            className="p-3 border border-1 rounded-3 mt-3 bg-white"
          >
            <h5>{post.username}</h5>
            <p>{post.createdAt}</p>
            <p>{post.text}</p>
          </div>
        );
      })}
    </div>
  );
};
export default NotizieHome;
