import { DateIcon } from "../../../assets/icons/DateIcon";
import { DatePicker } from "antd";
export const DateRangePicker = ({ setDates, dates, className }) => {
  // Hugatsaan shuultiin ehnii date
  const onChangeStart = (date, dateString) => {
    setDates({ ...dates, start: dateString });
  };
  // Hugatsaan shuultiin tugsguliin date
  const onChangeEnd = (date, dateString) => {
    setDates({ ...dates, end: dateString });
  };
  return (
    <div className={`flex items-center ${className}`}>
      <DatePicker
        picker="date"
        showToday={false}
        placeholder="Эхлэх"
        onChange={onChangeStart}
        suffixIcon={<DateIcon />}
      />
      <DatePicker
        picker="date"
        placeholder="Дуусах"
        onChange={onChangeEnd}
        suffixIcon={<DateIcon />}
      />
    </div>
  );
};
