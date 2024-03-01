import { FilterProps } from "../../../components/common/FilterProps/FilterProps";
import { SearchProps } from "../../../components/common/SearchProps/SearchProps";
import { getStateText } from "../../../utils/functions/getStateText";
import { IconButton } from "../../../components/common/IconButton/IconButton";
import { State } from "../../../components/forSite/ServiceState/State";

export const Columns = (
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
) => [
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
        new Date(record1.registrationTime) - new Date(record2.registrationTime)
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
