import { DropDown } from "../../common/DropDown/DropDown";
import { NotificationIcon } from "../../../assets/icons/NotificationIcon";
import { NotificationBadge } from "../../ui/NotificationBadge/NotificationBadge";
import { NotificationElement } from "./NotificationElement";
import { ViewAll } from "./ViewAll";
import { MarkAll } from "./MarkAll";
import { NotificationData } from "./Data/NotificationData";
import { List } from "../../common/List/List";
NotificationElement;
export const HeaderNotification = () => {
  const getMarginValue = () => {
    const screenWidth = window.innerWidth;

    // Define your logic to calculate margin based on screen width
    // For example, you can set different margins for different screen sizes
    if (screenWidth <= 1900) {
      return 15;
    } else {
      return 25;
    }
  };

  const isSmallScreen = () => {
    const screen = window.innerWidth;
    if (screen < 768) return true;
    return false;
  };

  const onClick = async () => {
    console.log("Pop up");
  };

  const RemoveOne = () => {
    console.log("Removed one");
  };
  const RemoveAll = () => {
    console.log("Removed all");
  };

  return (
    <DropDown
      trigger={
        <NotificationBadge
          Badge={NotificationIcon}
          badgeHeight={25}
          badgeWidth={25}
          counterHeight={18}
          counterWidth={18}
          count={3}
          location={"top right"}
        />
      }
      onclick={onClick}
      location={"bottom center right"}
      margin={getMarginValue()}
      isSmallScreen={isSmallScreen()}
    >
      <div className="w-[400px] rounded-b-lg bg-[#1D3049] text-xs p-3">
        <List
          lists={NotificationData().slice(0, 10)}
          ListElement={NotificationElement}
          liclassName={` mb-4`}
        />
        <div className="flex justify-between">
          <ViewAll />
          <MarkAll RemoveAll={RemoveAll} reRender={onClick} />
        </div>
      </div>
    </DropDown>
  );
};
