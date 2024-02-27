import { useState } from "react";
import { PaymentList } from "./PaymentList/PaymentList";
import { PaymentData } from "./Data/PaymentData";
import { DatePicker } from "antd";
import { useNavigate } from "react-router-dom";
import { DateIcon } from "../../assets/icons/DateIcon";

export const PaymentPage = () => {
  const currentYear = new Date().getFullYear();

  const [dates, setDates] = useState({
    start: `${currentYear}-01-01`,
    end: `${currentYear}-12-31`,
  });

  // Hugatsaan shuultiin ehnii date
  const onChangeStart = (date, dateString) => {
    console.log("start date:", dateString);
    setDates({ ...dates, start: dateString });
  };

  // Hugatsaan shuultiin tugsguliin date
  const onChangeEnd = (date, dateString) => {
    console.log("end date:", dateString);
    setDates({ ...dates, end: dateString });
  };

  const navigate = useNavigate();
  return (
    <div className="w-full h-full">
      <div className="mb-4">
        <DatePicker
          picker="date"
          showToday={false}
          placeholder="Эхлэх"
          style={{
            borderColor: "#E1E1E1",
            width: "120px",
            height: "40px",
            color: "#1D3049",
            marginRight: "10px",
          }}
          onChange={onChangeStart}
          className="custom-datepicker"
          suffixIcon={<DateIcon />}
        />
        <DatePicker
          picker="date"
          placeholder="Дуусах"
          style={{
            borderColor: "#E1E1E1",
            width: "120px",
            height: "40px",
          }}
          onChange={onChangeEnd}
          className="custom-datepicker"
          suffixIcon={<DateIcon />}
        />
      </div>
      <PaymentList OrderData={PaymentData()} />
    </div>
  );
};
