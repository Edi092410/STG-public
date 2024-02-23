import { Layout } from "antd";
import { FacebookIcon } from "../../../assets/icons/FacebookIcon";
import { CallIcon } from "../../../assets/icons/CallIcon";
const { Footer } = Layout;
export const Footer1 = () => {
  const item = {
    location:
      "Сүхбаатар дүүрэг 8-р хороо, Б.Алтангэрэлийн гудамж-5, Сити-Центр төв, 201 тоот",
    phone: "+976-7777-5560",
    email: "test@test.com",
  };
  return (
    <Footer
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        color: "white",
        backgroundColor: "#1D3049",
      }}
    >
      <a
        href="https://www.facebook.com/SiticomLLC"
        target="_blank"
        className="md:m-0 my-2"
      >
        <FacebookIcon />
      </a>
      {/* <div className="md:m-0 my-2 text-center">{address}</div> */}
      <div className="md:m-0 my-2 text-center">
        Сүхбаатар дүүрэг 8-р хороо, Б.Алтангэрэлийн гудамж-5, Сити-Центр төв,
        201 тоот
      </div>
      <div className="flex items-center md:m-0 my-2">
        <CallIcon />
        {/* <div>{phone1}</div> */}
        <a href="tel:7777-5560">+976-7777-5560</a>
      </div>
    </Footer>
  );
};
