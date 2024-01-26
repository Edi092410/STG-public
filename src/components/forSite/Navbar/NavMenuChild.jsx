import { DropDown } from "../../common/DropDown/DropDown";
import { ThickDownIcon } from "../../../assets/icons/ThickDownIcon";
import { List } from "../../common/List/List";
import { Card } from "../../ui/Card/Card";
export const NavMenuChild = (prop) => {
  return (
    <DropDown
      trigger={
        <div className="flex items-center">
          <div className="mr-1">{prop.name}</div>
          <div className="h-full flex">{<ThickDownIcon color={"#fff"} />}</div>
        </div>
      }
      margin={10}
      location={"bottom center"}
    >
      {prop.subLinks ? (
        <Card className={` rounded-lg bg-white`}>
          <List
            lists={prop.subLinks}
            ListElement={Element}
            ulclassName={`text-black p-10 font-[18px]`}
            liclassName={`rounded-lg hover:bg-slate-200 transition duration-500 ease-in-out mb-2.5`}
          />
        </Card>
      ) : null}
    </DropDown>
  );
};
import { NavLink } from "react-router-dom";
export const Element = (prop) => {
  return (
    <NavLink to={prop.to}>
      <div className="flex items-center mr-10">
        <div className="flex justify-center items-center w-[100px] h-[60px] mr-2.5">
          <img src={prop.image} alt={prop.name} />
        </div>
        <div>{prop.name}</div>
      </div>
    </NavLink>
  );
};
