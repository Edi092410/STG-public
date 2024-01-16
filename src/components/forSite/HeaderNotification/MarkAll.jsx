import React from "react";

export const MarkAll = () => {
  const onClick = async () => {
    // try {
    //   const response = await PostDataWithAuthorization(
    //     "/notification/markseenall",
    //     {}
    //   );
    //   console.log("response of mark seen all", response);
    //   if (response.status === 200) {
    //     // localStorage.setItem("notificationCount", 0);
    //     // setNotificationCount(0);
    //     RemoveAll();
    //     reRender();
    //   }
    // } catch (error) {
    //   console.log("error from mark seen all:", error);
    // }
    console.log("Mark all");
  };
  return (
    <div className="cursor-pointer" onClick={onClick}>
      Бүгдийг Уншсан
    </div>
  );
};
