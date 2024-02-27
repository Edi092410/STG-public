import { Checkbox, Button } from "antd";
import FilterOutlined from "@ant-design/icons";
// Filter дээрх render хийх component
export const FilterProps = ({ filterElements, option, filter }) => ({
  filterDropdown: ({
    setSelectedKeys,
    selectedKeys,
    confirm,
    clearFilters,
  }) => {
    const isAnyCheckboxSelected = selectedKeys.length > 0;
    return (
      <div style={{ padding: 16 }}>
        <Checkbox.Group
          options={filterElements
            .filter((stateValue) => stateValue !== "")
            .map((stateValue) => ({
              label: option ? option(stateValue) : stateValue,
              value: stateValue,
            }))}
          value={selectedKeys}
          onChange={(values) => setSelectedKeys(values)}
          className="flex-col"
        />
        <div style={{ borderTop: "1px solid #ccc", marginTop: 16 }}></div>
        <div style={{ marginTop: 16, textAlign: "right" }}>
          <Button
            type="primary"
            onClick={() => confirm()}
            size="small"
            style={{ marginRight: 8, backgroundColor: "#0496D4" }}
          >
            OK
          </Button>
          <Button
            onClick={() => clearFilters()}
            size="small"
            style={{ width: 70 }}
            disabled={!isAnyCheckboxSelected}
          >
            Арилгах
          </Button>
        </div>
      </div>
    );
  },
  filterIcon: () => <FilterOutlined />,
  filters: filterElements.map((stateValue) => ({
    text: stateValue, // You need to define a function to get the display text for each state value
    value: stateValue,
  })),
  onFilter: (value, record) => record[filter] === value,
  filterSearch: true,
});
