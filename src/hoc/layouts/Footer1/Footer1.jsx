import { Layout } from "antd";
import { FacebookIcon } from "../../../assets/icons/FacebookIcon";
import { CallIcon } from "../../../assets/icons/CallIcon";
const { Footer } = Layout;
export const Footer1 = () => {
  const item = {
    address:
      "Сүхбаатар дүүрэг 8-р хороо, Б.Алтангэрэлийн гудамж-5, Сити-Центр төв, 201 тоот",
    phone: "7777-5560",
    email: "test@test.com",
  };
  return (
    <Footer
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        color: "black",
        // backgroundColor: "#1D3049",
        backgroundColor: "#d1d5db",
      }}
    >
      <a
        href="https://www.facebook.com/SiticomLLC"
        target="_blank"
        className="md:m-0 my-2"
      >
        <FacebookIcon />
      </a>
      <a
        href="https://www.google.com/maps/@47.9190819,106.9207312,21z?entry=ttu"
        target="_blank"
        className="md:m-0 my-2 text-center"
      >
        {item.address}
      </a>
      <div className="flex items-center md:m-0 my-2">
        <CallIcon />
        <a href="tel:7777-5560">{item.phone}</a>
      </div>
    </Footer>
  );
};
