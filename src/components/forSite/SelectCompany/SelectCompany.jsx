import { Select } from "antd";

export const SelectCompany = ({
  companies,
  selectedCompany,
  setSelectedCompany,
}) => {
  return (
    <Select
      style={{ width: 200 }}
      defaultValue={selectedCompany}
      onChange={(e) => setSelectedCompany(e.target.value)}
    >
      {companies &&
        companies.length > 0 &&
        companies.map((item) => (
          <Option key={item.customerId} value={item.customerId}>
            {item.name}
          </Option>
        ))}
    </Select>
  );
};
