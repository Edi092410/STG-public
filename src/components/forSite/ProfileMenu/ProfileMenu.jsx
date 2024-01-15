import React from "react";
import { PopUp } from "../../common/PopUp/PopUp";
import { ProfileTrigger } from "./ProfileTrigger";
import { List } from "../../common/List/List";
export const ProfileMenu = () => {
  return (
    <PopUp
      trigger={<ProfileTrigger name={"Test"} />}
      location={"bottom center left"}
    >

    </PopUp>
  );
};
