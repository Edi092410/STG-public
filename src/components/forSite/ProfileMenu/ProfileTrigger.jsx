import React from "react";
import { ProfileIcon } from "../../../assets/icons/ProfileIcon";
export const ProfileTrigger = ({ name }) => {
  return (
    <div className="flex items-center">
      <ProfileIcon />
      <div className="ml-2">{name}</div>
    </div>
  );
};
