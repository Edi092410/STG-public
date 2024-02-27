import { Input, Space, Button } from "antd";
import { TextHighlighter } from "../TextHighlighter/TextHighlighter";
import SearchOutlined from "@ant-design/icons";

// Search-н render-лэх component
export const SearchProps = ({
  dataIndex,
  searchInput,
  handleSearch,
  handleReset,
  setSearchText,
  setSearchedColumn,
  searchedColumn,
  searchText,
}) => ({
  filterDropdown: ({
    setSelectedKeys,
    selectedKeys,
    confirm,
    clearFilters,
    close,
  }) => (
    <div
      style={{
        padding: 8,
      }}
      onKeyDown={(e) => e.stopPropagation()}
    >
      <Input
        ref={searchInput}
        placeholder={`Хайх утгаа оруулна уу`}
        value={selectedKeys[0]}
        onChange={(e) =>
          setSelectedKeys(e.target.value ? [e.target.value] : [])
        }
        onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
        style={{
          marginBottom: 8,
          display: "block",
        }}
      />
      <Space>
        <Button
          type="primary"
          onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
          icon={<SearchOutlined />}
          size="small"
          style={{
            width: 90,
            backgroundColor: "#0496D4",
          }}
        >
          Хайх
        </Button>
        <Button
          onClick={() => clearFilters && handleReset(clearFilters)}
          size="small"
          style={{
            width: 90,
          }}
        >
          Арилгах
        </Button>
        <Button
          type="link"
          size="small"
          onClick={() => {
            confirm({
              closeDropdown: false,
            });
            setSearchText(selectedKeys[0]);
            setSearchedColumn(dataIndex);
          }}
        >
          Шүүх
        </Button>
        <Button
          type="link"
          size="small"
          onClick={() => {
            close();
          }}
        >
          Хаах
        </Button>
      </Space>
    </div>
  ),
  filterIcon: <SearchOutlined />,
  onFilter: (value, record) =>
    record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
  onFilterDropdownOpenChange: (visible) => {
    if (visible) {
      setTimeout(() => searchInput.current?.select(), 100);
    }
  },
  render: (text) =>
    searchedColumn === dataIndex ? (
      <TextHighlighter text={text} search={searchText} />
    ) : (
      text
    ),
});
