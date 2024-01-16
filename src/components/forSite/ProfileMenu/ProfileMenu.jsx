import React from "react";
import { DropDown } from "../../common/DropDown/DropDown";
import { ProfileTrigger } from "./ProfileTrigger";
import { List } from "../../common/List/List";
export const ProfileMenu = () => {
  return (
    <DropDown
      trigger={<ProfileTrigger name={"Test"} />}
      location={"bottom center left"}
    ></DropDown>
  );
};
