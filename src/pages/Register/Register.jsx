import { SiteTemplate } from "../../components/forSite/SiteTemplate/SiteTemplate";
import { RegisterForm } from "./RegisterForm/RegisterForm";
export const Register = () => {
  return (
    <SiteTemplate location={"top"} text={"Бүртгүүлэх"}>
      <RegisterForm />
    </SiteTemplate>
  );
};
