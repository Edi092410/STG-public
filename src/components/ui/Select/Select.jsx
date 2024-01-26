// import React, { useState, useRef, useEffect } from "react";
// import { SelectIcon } from "./SelectIcon";
// import useOutsideClick from "../../../utils/hooks/useOutsideClick";
// export const Select = ({
//   value,
//   onSelectedChange,
//   options,
//   optionId,
//   location,
//   appearance,
//   icon,
//   iconColor,
// }) => {
//   const menuRef = useRef();

//   const [isOpened, setIsOpened] = useState(false);

//   useOutsideClick(menuRef, () => setIsOpened(false));

//   return (
//     <div
//       className={`flex ${
//         location === "left"
//           ? "text-left"
//           : location === "center"
//           ? "text-center"
//           : "text-right"
//       }`}
//       onClick={() => {
//         setIsOpened(!isOpened);
//       }}
//       ref={menuRef}
//     >
//       <select
//         className={`${
//           appearance === "none" && "appearance-none"
//         } w-fit h-[30px] bg-transparent focus:outline-none mr-[2px] cursor-pointer `}
//         defaultValue={value}
//         onChange={(e) => onSelectedChange(e.target.value)}
//       >
//         {options && options.length > 0 ? (
//           options.map((prop) => (
//             <option
//               className="text-black"
//               value={prop[optionId]}
//               key={prop[optionId]}
//             >
//               {prop.name.split("[")[0]}
//             </option>
//           ))
//         ) : (
//           <option>Сонголт байхгүй</option>
//         )}
//       </select>
//       <div className="h-full flex items-center">
//         <SelectIcon isOpened={isOpened} icon={icon} iconColor={iconColor} />
//       </div>
//     </div>
//   );
// };

import { Select } from "antd";
import PropTypes from "prop-types";
import { ThickDownIcon } from "../../../assets/icons/ThickDownIcon";
import "./style.css";

export const Select1 = ({ data, label, value, defaultValue, size, width }) => {
  const handleChange = (value) => {
    console.log(value);
  };
  // Transform Data to fit the options prop structure
  const transformedData = data.map((item) => ({
    value: item[value],
    label: item[label],
  }));

  return (
    <Select
      labelInValue
      defaultValue={defaultValue}
      style={{ width: `${width}px` }}
      onChange={handleChange}
      options={transformedData}
      size={size}
      suffixIcon={<ThickDownIcon color={"#000000"} />}
    />
  );
};

Select1.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  defaultValue: PropTypes.object.isRequired,
  size: PropTypes.string,
  width: PropTypes.number,
  className: PropTypes.string,
};
