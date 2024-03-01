import React, { useContext, useEffect, useState, useRef } from "react";
import { DatePicker, Table, Select, message } from "antd";
import { State } from "../../components/forSite/ServiceState/State";
import { SearchProps } from "../../components/common/SearchProps/SearchProps";
import { FilterProps } from "../../components/common/FilterProps/FilterProps";
// import { orderData } from "./Data/orderData";
import { DateIcon } from "../../assets/icons/DateIcon";
import { GetDataService } from "../../backend/axios/AxiosService2";

export const OrderList = () => {
  // API gaas irj bga niit data
  const [orderData, setOrderData] = useState([]);

  const [selectedCompany, setSelectedCompany] = useState("");

  // UseContext ашиглан component refresh хийх
  // const { refresh, setRefresh } = useContext(OrderContext);
  // Loading хийх
  const [loading, setLoading] = useState(false);

  const [modal, setModal] = useState(false);
  // const [notif, setNotif] = useState(false);
  // const [type, setType] = useState(0);
  // const [storedNumber, setStoredNumber] = useState("");

  const currentYear = new Date().getFullYear();
  const [dates, setDates] = useState({
    start: `${currentYear}-01-01`,
    end: `${currentYear}-12-31`,
  });

  // Hugatsaan shuultiin ehnii date
  const onChangeStart = (date, dateString) => {
    setDates({ ...dates, start: dateString });
  };
  // Hugatsaan shuultiin tugsguliin date
  const onChangeEnd = (date, dateString) => {
    setDates({ ...dates, end: dateString });
  };
  const [pagination, setPagination] = useState({
    page: 1,
    pageSize: 10,
    total: 0,
  });

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

  // useEffect(() => {
  //   const FetchData = async () => {
  //     setLoading(true);
  //     try {
  //       const response = await GetDataService(
  //         `/services/getservicelist?customerId=${selectedCompany}&startDate=${dates.start}&endDate=${dates.end}`
  //       );
  //       setOrderData(response.data);
  //     } catch (err) {
  //       // setHasError(true);
  //       message.error(err.message);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };
  //   FetchData();
  // }, [selectedCompany, dates]);

  const getStateText = (stateValue) => {
    switch (parseInt(stateValue)) {
      case 0:
        return "Хүлээгдэж байна";
      case 1:
        return "Хийгдэж байна";
      case 2:
        return "Хийгдсэн";
      case 3:
        return "Хийгдээгүй";
      default:
        return "";
    }
  };
  const uniqueStates = Array.from(
    new Set(orderData.map((item) => item.state))
  ).filter((value) => value !== undefined);

  const uniqueUsers = Array.from(
    new Set(orderData.map((item) => item.servedUser))
  ).filter((value) => value !== undefined);

  // Хүснэгтийн толгой болон бусад мэдээллүүд
  const columns = [
    {
      key: "1",
      title: "Огноо",
      dataIndex: "registrationTime",
      width: "20%",
      render: (text) => (
        <div>
          <div>{text.split("T")[0]}</div>
          <span>{text.split("T")[1]}</span>
        </div>
      ),
      sorter: (record1, record2) => {
        return (
          new Date(record1.registrationTime) -
          new Date(record2.registrationTime)
        );
      },
    },
    {
      key: "2",
      title: "Тайлбар",
      dataIndex: "comment",
      width: "40%",
      onCell: (record) => ({
        onClick: () => {
          setModal(true);
          setStoredNumber(record.number);
          setType(record.serviceType);
        },
        className: "cursor-pointer",
      }),
      ...SearchProps({
        dataIndex: "comment",
        searchInput: searchInput,
        handleSearch: handleSearch,
        handleReset: handleReset,
        setSearchText: setSearchText,
        setSearchedColumn: setSearchedColumn,
        searchedColumn: searchedColumn,
        searchText: searchText,
      }),
    },
    {
      key: "3",
      title: "Төлөв",
      dataIndex: "state",
      width: "15%",
      render: (state) => <State data={state} />,
      ...FilterProps({
        filterElements: uniqueStates,
        filter: "state",
        option: getStateText,
      }),
    },
    {
      key: "4",
      title: "Хариуцсан",
      dataIndex: "servedUser",
      width: "15%",
      ...FilterProps({
        filterElements: uniqueUsers,
        filter: "servedUser",
      }),
    },
    {
      key: "5",
      title: "Цуцлах",
      dataIndex: "servedUser",
      width: "10%",
      render: (user, record) =>
        !user && (
          <div className="w-full flex justify-center">
            <div className="w-5 h-5">
              <IconButton
                cancel={true}
                onClickFunction={() => {
                  setNotif(true);
                  setStoredNumber(record.number);
                  setType(record.serviceType);
                }}
              />
            </div>
          </div>
        ),
    },
  ];

  const paginationConfig = {
    // Customize pagination here
    total: orderData.length, // Total number of items
    showSizeChanger: true, // Show the "items per page" dropdown
    current: pagination.page,
    pageSize: pagination.pageSize,
    onChange: (pa, paSi) => {
      setPagination((prev) => ({ ...prev, page: pa }));
      setPagination((prev) => ({ ...prev, pageSize: paSi }));
    },
    showTotal: (total) => `Нийт: ${total}`, // Custom total text
    locale: {
      items_per_page: "", // Customize the text for size changer
    },
    // Add more customization options as needed
  };

  return (
    <div className=" px-[5%] my-[5vh]">
      <div className="flex items-center justify-between mb-4">
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
        <Select />
      </div>

      <div className=" w-full rounded-lg shadow-boxThin">
        <div className=" ">
          <div className="lg:overflow-visible overflow-auto w-full mt-4 z-100">
            <Table
              columns={columns}
              dataSource={orderData}
              pagination={paginationConfig}
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
        {/* {loading && (
          <div className="">
            <Loading />
          </div>
        )} */}
      </div>
    </div>
  );
};
