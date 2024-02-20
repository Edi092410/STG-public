import { SiteCard } from "../SiteCard/SiteCard";
export const SiteTemplate = ({ location, text, children }) => {
  return (
    <div className="flex justify-center items-center">
      <div className="my-5">
        <SiteCard location={location} text={text}>
          {children}
        </SiteCard>
      </div>
    </div>
  );
};
