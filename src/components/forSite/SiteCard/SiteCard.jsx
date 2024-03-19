import { Card } from "../../common/Card/Card";
export const SiteCard = ({ children, location, text }) => {
  return (
    <Card
      location={location}
      text={text}
      className={
        "w-full rounded-lg border border-slate-200 mt-4 p-10 lg:w-[400px] "
      }
      textClassName={`w-full font-bold text-[18px]`}
    >
      {children}
    </Card>
  );
};
