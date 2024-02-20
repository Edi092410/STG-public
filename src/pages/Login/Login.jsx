import { SiteTemplate } from "../../components/forSite/SiteTemplate/SiteTemplate";
import { LoginForm } from "./LoginForm/LoginForm";
export const Login = () => {
  return (
    <SiteTemplate location={"top"} text={"Нэвтрэх"}>
      <LoginForm />
    </SiteTemplate>
  );
};
