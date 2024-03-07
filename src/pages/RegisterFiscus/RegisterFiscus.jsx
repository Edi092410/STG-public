import { useEffect, useState } from "react";
import { RegisterFrom } from "./RegisterFrom/RegisterFrom";
import { SiteTemplate } from "../../components/forSite/SiteTemplate/SiteTemplate";
import { useNavigate, useLocation } from "react-router-dom";
import { Button, Empty } from "antd";
import { GetDataService } from "../../backend/axios/AxiosService2";
export const RegisterFiscus = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [hash, setHash] = useState("");
  const [isValid, setIsValid] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const searchParams = new URLSearchParams(location.search);
  useEffect(() => {
    const checkUser = async () => {
      if (location.search.includes("hash=")) {
        setHash(searchParams.get("hash"));
        try {
          const response = await GetDataService(
            `/users/checkinvitation?email=${searchParams.get(
              "email"
            )}&hash=${searchParams.get("hash")}`
          );
          console.log("check invitation", response);
          if (response?.status === 200) setIsValid(true);
          else if (
            response?.response?.status === 404 &&
            response?.response?.data?.success === false
          ) {
            console.log("No matching password");
            message.warning("Урилга таарахгүй байна");
            setIsValid(false);
          }
        } catch (error) {
          setErrorMsg("Алдаа гарлаа.");
        }
      }
    };
    checkUser();
  }, [location.search]);
  return (
    <>
      {isValid ? (
        <SiteTemplate location={"top"} text={"Бүртгүүлэх"}>
          <RegisterFrom
            location={location}
            hash={hash}
            errorMsg={errorMsg}
            setErrorMsg={setErrorMsg}
            email={searchParams.get("email")}
          />
        </SiteTemplate>
      ) : (
        <div className="w-full h-full flex items-center justify-center">
          <Empty description="Холбоос хүчингүй байна">
            <div>Та цахим шуудангаар очсон холбоосоо нягтална уу!</div>
            <Button className="mt-5" onClick={() => navigate("/")}>
              Нүүр хуудас руу шилжих
            </Button>
          </Empty>
        </div>
      )}
    </>
  );
};
