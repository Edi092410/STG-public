import React from "react";
import { Logo } from "../../../components/ui/Logo/Logo";
import { HeaderNotification } from "../../../components/forSite/HeaderNotification/HeaderNotification";
import { Select } from "../../../components/ui/Select/Select";
import { ProfileMenu } from "../../../components/forSite/ProfileMenu/ProfileMenu";
import { List } from "../../../components/common/List/List";
import { NavMenuElement } from "./NavMenuElement";
import { NavData } from "./Data/NavData";
import { CompanyData } from "./Data/CompanyData";

export const Navbar = () => {
  return (
    <div className="h-full flex items-center justify-around">
      <Logo text={"Санхүүгийн Тооцоолох Групп"} width={120} />
      <List
        lists={NavData()}
        ListElement={NavMenuElement}
        ulclassName={`flex flex-row`}
        liclassName={`mr-5`}
      />
      <div className="flex justify-center gap-x-2">
        <HeaderNotification />
        <Select
          location={"right"}
          icon={"thick"}
          iconColor={"#FFF"}
          appearance={"none"}
          options={CompanyData()}
          optionId={"customerId"}
        />
        <ProfileMenu />
      </div>
    </div>
  );
};
