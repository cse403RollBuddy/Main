import React from "react";
import { useHistory } from "react-router-dom";

export default function StartPage() {
  const history = useHistory();

  const onStartClick = () => {
    history.push("/HomePage");
  };

  return (
    <div>
      <button onClick={onStartClick}>Start Your Adventure</button>
    </div>
  );
}
