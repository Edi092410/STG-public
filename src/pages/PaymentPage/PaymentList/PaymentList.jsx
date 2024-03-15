import { useState, useRef } from "react";
import { SearchProps } from "../../../components/common/SearchProps/SearchProps";
import { Table } from "antd";

export const PaymentList = ({ OrderData, loading }) => {
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

  const [pagination, setPagination] = useState({
    page: 1,
    pageSize: 10,
    total: 0,
  });

  const columns = [
    {
      key: "1",
      title: "Огноо",
      dataIndex: "date",
      width: "12%",
      render: (text) => (
        <div>
          <div>{text.split("T")[0]}</div>
        </div>
      ),
      sorter: (record1, record2) => {
        return new Date(record1.date) - new Date(record2.date);
      },
    },
    {
      key: "2",
      title: "Баримтын дугаар",
      dataIndex: "number",
      width: "15%",
      ...SearchProps({
        dataIndex: "number",
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
      title: "Ажил үйлчилгээ",
      dataIndex: "transactionReference",
      ...SearchProps({
        dataIndex: "transactionReference",
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
      key: "4",
      title: "Төлөх дүн",
      dataIndex: "dtAmount",
      width: "10%",
      render: (text) => (
        <div className="text-right">{text.toLocaleString("en-US")}₮</div>
      ),
    },
    {
      key: "5",
      title: "Төлсөн",
      dataIndex: "ktAmount",
      width: "10%",
      render: (text) => (
        <div className="text-right">{text.toLocaleString("en-US")}₮</div>
      ),
    },
    {
      key: "6",
      title: "Үлдэгдэл",
      dataIndex: "dtAmount",
      width: "10%",
      render: (text, record) => (
        <div className="text-right">
          {record.dtAmount - record.ktAmount > 0
            ? record.dtAmount - record.ktAmount.toLocaleString("en-US")
            : 0}
          ₮
        </div>
      ),
    },
    {
      key: "7",
      title: "Илүү төлөлт",
      dataIndex: "ktAmount",
      width: "10%",
      render: (text, record) => (
        <div className="text-right">
          {record.dtAmount - record.ktAmount > 0
            ? 0
            : (record.ktAmount - record.dtAmount).toLocaleString("en-US")}
          ₮
        </div>
      ),
    },
  ];
  return (
    <div className="w-full shadow-boxThin rounded-lg">
      <div className="w-full">
        {/* <div
          className="float-right cursor-pointer hover:scale-110 transition duration-200"
          onClick={() => generatePDF()}
        >
          <PrintIcon />
        </div> */}
      </div>
      {/* <div ref={componentPDF}> */}
      <Table
        columns={columns}
        dataSource={OrderData ?? []}
        loading={loading}
        pagination={{
          total: OrderData ? OrderData.length : 0, // Total number of items
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
        }}
      />
      {/* </div> */}
    </div>
  );
};
