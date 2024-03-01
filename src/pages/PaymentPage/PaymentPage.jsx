import { useState, useEffect } from "react";
import { PaymentList } from "./PaymentList/PaymentList";
import { message } from "antd";
import { Card } from "../../components/common/Card/Card";
import { GetDataWithAuthorization } from "../../backend/axios/AxiosService2";
import { SelectCompany } from "../../components/forSite/SelectCompany/SelectCompany";
import { DateRangePicker } from "../../components/common/DateRangePicker/DateRangePicker";

export const PaymentPage = () => {
  const currentYear = new Date().getFullYear();

  const [dates, setDates] = useState({
    start: `${currentYear}-01-01`,
    end: `${currentYear}-12-31`,
  });

  const companies = JSON.parse(localStorage.getItem("companies"));

  const [selectedCompany, setSelectedCompany] = useState(
    companies[0].customerId
  );

  const [loading, setLoading] = useState(false);
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
        const response = await GetDataWithAuthorization(
          `/services/getbillinginfo?customerId=${selectedCompany}&startDate=${dates.start}&endDate=${dates.end}`
        );
        console.log("response", response);
        setOrderData(response?.data?.transactions);
        setBeginBalance(response?.data?.beginbalance);
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
      <SelectCompany
        companies={companies}
        selectedCompany={selectedCompany}
        setSelectedCompany={setSelectedCompany}
      />
      <div className="flex items-center justify-between my-4">
        <DateRangePicker
          dates={dates}
          setDates={setDates}
          className={` gap-x-4`}
        />
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
