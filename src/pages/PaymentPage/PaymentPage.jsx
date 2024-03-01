import { useState, useEffect } from "react";
import { PaymentList } from "./PaymentList/PaymentList";
import { PaymentData } from "./Data/PaymentData";
import { DatePicker, Select, message } from "antd";
import { DateIcon } from "../../assets/icons/DateIcon";
import { Card } from "../../components/common/Card/Card";
import { GetDataService } from "../../backend/axios/AxiosService2";

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

  const [loading, setLoading] = useState(false);
  const [selectedCompany, setSelectedCompany] = useState("");
  const [OrderData, setOrderData] = useState([]);
  const [beginBalance, setBeginBalance] = useState("");

  // Niit tuluh dun
  const totalPay =
    OrderData && OrderData.length > 0
      ? OrderData.reduce((total, props) => {
          if (props.dtAmount) {
            return total + parseFloat(props.dtAmount);
          }
          return total;
        }, 0)
      : 0;

  // Niit tulsun dun
  const totalPayed =
    OrderData && OrderData.length > 0
      ? OrderData.reduce((total, props) => {
          if (props.ktAmount) {
            return total + parseFloat(props.ktAmount);
          }
          return total;
        }, 0)
      : 0;

  useEffect(() => {
    const FetchData = async () => {
      setLoading(true);
      try {
        const response = await GetDataService(
          `/services/getbillinginfo?customerId=${selectedCompany}&startDate=${dates.start}&endDate=${dates.end}`
        );
        console.log("response", response);
        setOrderData(response?.data?.transactions);
      } catch (err) {
        message.error(err.message);
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    FetchData();
  }, [selectedCompany, dates]);

  return (
    <div className="px-[5%] my-[5vh]">
      <Select />
      <div className="flex items-center justify-between my-4">
        <div className="flex items-center">
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
        <div className="flex items-center gap-x-2">
          <Card
            className={`w-[200px] h-[40px] bg-white rounded-lg border border-slate-200`}
          >
            <div className="h-full flex items-center justify-center">
              <div>Эхний үлдэгдэл:</div>
              <div className=" ml-1 text-indigo-900 font-bold">
                {OrderData
                  ? parseFloat(beginBalance).toLocaleString("en-US")
                  : "0"}
                ₮
              </div>
            </div>
          </Card>
          <Card
            className={`w-[200px] h-[40px] bg-white rounded-lg border border-slate-200`}
          >
            <div className="h-full flex items-center justify-center">
              <div>Эцсийн үлдэгдэл:</div>
              <div className=" ml-1 text-indigo-900 font-bold">
                {OrderData
                  ? (
                      parseFloat(beginBalance) +
                      parseFloat(totalPay) -
                      parseFloat(totalPayed)
                    ).toLocaleString("en-US")
                  : "0"}
                ₮
              </div>
            </div>
          </Card>
        </div>
      </div>

      <PaymentList OrderData={OrderData} loading={loading} />
    </div>
  );
};
