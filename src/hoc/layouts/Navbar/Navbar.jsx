import React from "react";
import { Logo } from "../../../components/ui/Logo/Logo";
import { NavMenu } from "../../../components/common/NavMenu/NavMenu";
import { HeaderNotification } from "../../../components/forSite/HeaderNotification/HeaderNotification";
import { Select } from "../../../components/ui/Select/Select";
import { ProfileMenu } from "../../../components/forSite/ProfileMenu/ProfileMenu";

export const Navbar = () => {
  const navData = [
    {
      name: "Шийдэл",
      to: "/",
      key: "product",
    },
    {
      name: "Харилцагчийн үйлчилгээ",
      to: "/test",
      key: "service",
    },
    {
      name: "Сургалт",
      to: "/course",
      key: "course",
    },
    {
      name: "Бичвэр",
      to: "/article",
      key: "article",
    },
  ];
  const companies = [
    {
      customerId: "000bf50e-fcc6-49f4-b5aa-e984fd163a82",
      name: "ЭГЭ ХХКомпани.УБ [Улаанбаатар] [Улаанбаатар шууд]",
    },
    {
      customerId: "f50e-fcc6-49f4-b5sdkfj-566541skdj",
      name: "Санхүүгийн тооцоолох",
    },
  ];

  return (
    <div className="h-full flex items-center justify-around">
      <Logo text={"Санхүүгийн Тооцоолох Групп"} width={120} />
      <NavMenu navData={navData} />
      <div className="flex justify-center gap-x-2">
        <HeaderNotification />
        <Select
          location={"right"}
          icon={"thick"}
          appearance={"none"}
          options={companies}
          optionId={"customerId"}
        />
        <ProfileMenu />
      </div>
    </div>
  );
};
