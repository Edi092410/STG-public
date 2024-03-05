import { useState } from "react";
import { Hour24Icon } from "../../../assets/icons/Hour24Icon";
import { SingleNotification } from "./SingleNotification";
export const NotificationElement = ({
  text,
  seen,
  date,
  customerId,
  number,
  id,
  reRender,
  RemoveOne,
}) => {
  const [modal, setModal] = useState(false);

  const markSeen = async () => {
    try {
      const response = await PostDataWithAuthorization(
        `/notification/markseen?id=${id}`
      );
      console.log("resp:", response);
      if (response.status === 200) {
        reRender();
        RemoveOne();
      }
    } catch (error) {
      console.log("error from notification element", error);
    }
  };

  const onClick = () => {
    setModal(true);
    markSeen();
  };
  return (
    <div className={`flex text-xs ${seen ? "text-[#7B7B7B]" : " text-white"}`}>
      <div className="flex flex-col justify-center w-[10%] mr-[10px]">
        <div
          className={`flex items-center justify-center w-[30px] h-[30px] rounded-full ${
            seen ? "bg-[#7B7B7B]" : "bg-white"
          }`}
        >
          <Hour24Icon />
        </div>
        <div className="text-[8px] flex-shrink">Үйлчилгээ</div>
      </div>
      <div>
        <SingleNotification
          text={text}
          date={date}
          onClick={onClick}
          seen={seen}
        />
      </div>
      {modal && (
        <div className="">
          <OrderDetail
            selectedOption={customerId}
            closeModal={() => setModal(false)}
            type={number.startsWith("Ү") ? 1 : 0}
            number={number}
          />
        </div>
      )}
    </div>
  );
};
