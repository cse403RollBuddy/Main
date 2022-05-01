import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";

export default function StartPage() {
  const history = useNavigate();

  const onMainClick = (e) => {
    e.preventDefault();
    history("/HomePage");
  };

  return (
    <Button
      onClickAction={onMainClick}
      buttonText="Enter HomePage"
      buttonStyle="red"
    />
  );
}
