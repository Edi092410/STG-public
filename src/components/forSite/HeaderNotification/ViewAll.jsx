import React from "react";
import { useNavigate } from "react-router-dom";

export const ViewAll = () => {
  const navigate = useNavigate();
  const onClick = () => {
    navigate("/notifications");
    console.log("view all");
  };
  return (
    <div className="cursor-pointer" onClick={onClick}>
      Бүгдийг харах
    </div>
  );
};
