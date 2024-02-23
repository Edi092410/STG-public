import { Breadcrumb } from "antd";
export const Breadcrumb1 = ({ items, className }) => {
  return (
    <Breadcrumb
      items={items}
      className={`w-full bg-[#F1EEE4] px-3 rounded-lg ${className}`}
    />
  );
};
