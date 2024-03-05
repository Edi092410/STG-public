import React, { createContext, useState } from "react";
export const NotificationCountContext = createContext();
export const NotificationCountProvider = ({ children }) => {
  const count = localStorage.getItem("notificationCount")
    ? parseInt(localStorage.getItem("notificationCount"))
    : 0;
  const [notificationCount, setNotificationCount] = useState(count);
  const RemoveOne = () => {
    let temp;
    if (count > 0) temp = count - 1;
    else temp = 0;
    localStorage.setItem("notificationCount", temp);
    setNotificationCount(temp);
  };
  const RemoveAll = () => {
    if (count >= 0) {
      localStorage.setItem("notificationCount", 0);
      setNotificationCount(0);
    }
  };
  const HandleChange = (notif) => {
    setNotificationCount(notif);
    localStorage.setItem("notificationCount", notif);
  };
  return (
    <NotificationCountContext.Provider
      value={{
        notificationCount,
        setNotificationCount,
        RemoveAll,
        RemoveOne,
        HandleChange,
      }}
    >
      {children}
    </NotificationCountContext.Provider>
  );
};
