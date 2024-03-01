export const getStateText = (stateValue) => {
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
