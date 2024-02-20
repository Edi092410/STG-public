import { RegisterFrom } from "./RegisterFrom/RegisterFrom";
import { SiteTemplate } from "../../components/forSite/SiteTemplate/SiteTemplate";
export const RegisterFiscus = () => {
  return (
    <SiteTemplate location={"top"} text={"Бүртгүүлэх"}>
      <RegisterFrom />
    </SiteTemplate>
  );
};
