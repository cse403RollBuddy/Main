import React, { useState } from "react";

export default function StartPage() {
  const [dummy, setDummy] = useState(null);
  const dummyCall = async () => {
    await fetch("http:localhost:4567/data")
      .then((response) => response.json())
      .catch((e) => {
        alert("Cant get to the server :(");
        throw new Error("Server unavailable");
      })
      .then((data) => {
        return setDummy(data);
      });
  };

  return (
    <div>
      <button onClick={dummyCall}> THIS IS A CALL TO THE BACKEND</button>
      <div>{dummy}</div>
    </div>
  );
}
