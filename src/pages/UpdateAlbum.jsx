import React, { useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
export default function UpdateAlbum() {
  let { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    const updateAlbum = async () => {
      fetch(`https://jsonplaceholder.typicode.com/albums/${id}`, {
        method: "PUT",
        body: JSON.stringify({
          id: id,
          title: "foo",
          userId: id,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((json) => {
          console.log(json);
          navigate("/");
        });
    };
    updateAlbum();
  }, [id]);

  return <div>UpdateAlbum</div>;
}
