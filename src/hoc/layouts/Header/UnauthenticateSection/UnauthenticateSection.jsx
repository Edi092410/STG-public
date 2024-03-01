import { UnderlinedLink } from "../../../../components/common/UnderlinedLink/UnderlinedLink";
export const UnauthenticateSection = () => {
  return (
    <div className="mr-[20px]">
      <UnderlinedLink to={"/login"} name={"Нэвтрэх"} />
    </div>
  );
};
