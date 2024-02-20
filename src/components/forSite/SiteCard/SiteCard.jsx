import { Card } from "../../common/Card/Card";
export const SiteCard = ({ children, location, text }) => {
  return (
    <Card
      location={location}
      text={text}
      className={
        "w-full rounded-lg border border-slate-200 mt-4 pl-10 py-10 pr-10 md:pr-0 lg:min-w-[500px] "
      }
      textClassName={`w-full font-bold text-[18px]`}
    >
      {children}
    </Card>
  );
};
