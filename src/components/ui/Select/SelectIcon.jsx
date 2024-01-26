import { ThinDownIcon } from "../../../assets/icons/ThinDownIcon";
import { ThickDownIcon } from "../../../assets/icons/ThickDownIcon";
import { ThickUpIcon } from "../../../assets/icons/ThickUpIcon";
import { ThinUpIcon } from "../../../assets/icons/ThinUpIcon";

export const SelectIcon = ({ isOpened, icon, iconColor }) => {
  const renderIcon = () => {
    const IconComponent =
      icon === "thin"
        ? isOpened
          ? ThinUpIcon
          : ThinDownIcon
        : isOpened
        ? ThickUpIcon
        : ThickDownIcon;
    return <IconComponent color={iconColor} />;
  };

  return (
    <div className={`flex items-center cursor-pointer pointer-events-none `}>
      {renderIcon()}
    </div>
  );
};
