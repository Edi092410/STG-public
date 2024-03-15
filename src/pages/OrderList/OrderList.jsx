import { useEffect, useState, useRef } from "react";
import { Button, Table, message, Tooltip } from "antd";
import { GetDataWithAuthorization } from "../../backend/axios/AxiosService2";
import { SelectCompany } from "../../components/forSite/SelectCompany/SelectCompany";
import { DateRangePicker } from "../../components/common/DateRangePicker/DateRangePicker";
import { paginationConfig } from "../../components/common/PaginationConfig/paginationConfig";
import { Columns } from "./TableAdd/Columns";

export const OrderList = () => {
  // API gaas irj bga niit data
  const [orderData, setOrderData] = useState([]);

  const companies = JSON.parse(localStorage.getItem("companies"));

  const [selectedCompany, setSelectedCompany] = useState(
    companies[0].customerId
  );

  // UseContext ашиглан component refresh хийх

  // Loading хийх
  const [loading, setLoading] = useState(false);

  const [modal, setModal] = useState(false);
  const [type, setType] = useState(0);
  const [storedNumber, setStoredNumber] = useState("");

  // datepickerd ashigalagdah date
  const currentYear = new Date().getFullYear();
  const [dates, setDates] = useState({
    start: `${currentYear}-01-01`,
    end: `${currentYear}-12-31`,
  });

  const [pagination, setPagination] = useState({
    page: 1,
    pageSize: 10,
    total: 0,
  });

  // hailt hiiih logic
  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");
  const searchInput = useRef(null);
  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };
  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText("");
  };

  // Modal-г хаах
  const closeModal = () => {
    setModal(false);
  };

  // Өгөгдлүүдийг авах. Энэ дээр хийгдэж байгаа үйлдэл нь эхлээд компани аа сонгоод id-г нь
  // api рүү явуулна

  useEffect(() => {
    const FetchData = async () => {
      setLoading(true);
      try {
        const response = await GetDataWithAuthorization(
          `/services/getservicelist?customerId=${selectedCompany}&startDate=${dates.start}&endDate=${dates.end}`
        );
        setOrderData(response.data);
      } catch (err) {
        // setHasError(true);
        message.error(err.message);
      } finally {
        setLoading(false);
      }
    };
    FetchData();
  }, [selectedCompany, dates]);

  // filter hiih tulvuudiig shuuj avah
  const uniqueStates = Array.from(
    new Set(orderData && orderData.map((item) => item.state))
  ).filter((value) => value !== undefined);

  // filter hiih guitsetgegch ajilchidiin neriig shuuj avah
  const uniqueUsers = Array.from(
    new Set(orderData && orderData.map((item) => item.servedUser))
  ).filter((value) => value !== undefined);

  return (
    <div className=" px-[5%] my-[5vh]">
      <SelectCompany
        companies={companies}
        selectedCompany={selectedCompany}
        setSelectedCompany={setSelectedCompany}
      />
      <div className="flex items-center justify-between my-4">
        <DateRangePicker
          dates={dates}
          setDates={setDates}
          className={`gap-x-4`}
        />
        <Tooltip title="Боловсруулалт хийгдэж байна.">
          <Button onClick={() => console.log("create new request")}>
            Шинэ захиалга үүсгэх
          </Button>
        </Tooltip>
      </div>

      <div className=" w-full rounded-lg shadow-boxThin">
        <div className=" ">
          <div className="lg:overflow-visible overflow-auto w-full mt-4 z-100">
            <Table
              columns={Columns(
                setModal,
                setStoredNumber,
                setType,
                searchInput,
                handleSearch,
                handleReset,
                setSearchText,
                setSearchedColumn,
                searchedColumn,
                searchText,
                uniqueStates,
                uniqueUsers
              )}
              dataSource={orderData}
              pagination={paginationConfig(
                orderData ? orderData.length : 0,
                pagination,
                setPagination
              )}
              loading={loading}
            />
          </div>
        </div>
        {/* {modal && (
          <OrderDetail
            closeModal={closeModal}
            number={storedNumber}
            selectedOption={selectedCompany}
            type={type}
          />
        )} */}
        {/* {notif && (
          <div>
            <Notification
              name="Та захиалгаа цуцлахыг зөвшөөрч байна уу?"
              button="Тийм"
              closeModal={() => setNotif(false)}
              stateFunction={() =>
                Deleteorder({
                  number: storedNumber,
                  type: type,
                  setRefresh: setRefresh,
                  closeModal: closeModal,
                })
              }
            />
          </div>
        )} */}
      </div>
    </div>
  );
};
