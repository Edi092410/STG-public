import { Card } from "../../common/Card/Card";

export const DashboardCard = ({ children, text, borderColor, className }) => {
  return (
    <Card
      text={text}
      location={"top"}
      className={`rounded-lg border mt-4 p-6 shadow-thin border-t-[${borderColor}] ${className}`}
    >
      {children}
    </Card>
  );
};
