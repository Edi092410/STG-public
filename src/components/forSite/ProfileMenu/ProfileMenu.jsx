import React from "react";
import { DropDown } from "../../common/DropDown/DropDown";
import { ProfileTrigger } from "./ProfileTrigger";
import { List } from "../../common/List/List";
import { Card } from "../../ui/Card/Card";
import { MenuData } from "./Data/MenuData";
import { Element } from "./Element";
import { ProfileIcon } from "../../../assets/icons/ProfileIcon";
export const ProfileMenu = ({ name, email }) => {
  return (
    <DropDown
      trigger={
        <div className="flex items-center">
          <ProfileTrigger name={"Test"} />
        </div>
      }
      location={"bottom center right"}
      margin={5}
    >
      <Card className={`shadow-thin bg-white text-black w-[200px] p-2 `}>
        <div className="flex">
          <ProfileIcon color={"#000000"} size={"40"} />
          <div>
            <div>{name}</div>
            <div>{email}</div>
          </div>
        </div>
        <List lists={MenuData()} ListElement={Element} liclassName={""} />
        <div className=" font-semibold cursor-pointer p-2">Системээс гарах</div>
      </Card>
    </DropDown>
  );
};
