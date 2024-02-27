// Back-end-ээс ирж байгаа захиалгын төлвийн id-г үг болгох function
export const State = ({ data }) => {
  let jsxElement = null;

  switch (parseInt(data)) {
    case 0:
      jsxElement = (
        <div className={"bg-[#BDBDBD] text-white rounded-[4px] w-fit p-1"}>
          Хүлээгдэж байна
        </div>
      );
      break;
    case 1:
      jsxElement = (
        <div className={"bg-[#0496D4] text-white rounded-[4px] w-fit p-1"}>
          Хийгдэж байна
        </div>
      );
      break;
    case 2:
      jsxElement = (
        <div className={"bg-[#78A983] text-white rounded-[4px] w-fit p-1"}>
          Хийгдсэн
        </div>
      );
      break;
    case 3:
      jsxElement = (
        <div className={"bg-[#FAA61A] text-white rounded-[4px] w-fit p-1"}>
          Хийгдээгүй
        </div>
      );
      break;
    default:
      break;
  }

  return jsxElement;
};
