import React from "react";
import { ProfileIcon } from "../../../assets/icons/ProfileIcon";
export const ProfileTrigger = ({ name }) => {
  return (
    <div className="flex items-center">
      <ProfileIcon color={"#FFF"} size={"25"} />
      <div className="ml-[2px]">{name}</div>
    </div>
  );
};
