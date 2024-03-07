import { useState, useContext, useEffect } from "react";
import { Dropdown, Badge, Card } from "antd";
import { NotificationIcon } from "../../../assets/icons/NotificationIcon";
import { NotificationElement } from "./NotificationElement";
import { ViewAll } from "./ViewAll";
import { MarkAll } from "./MarkAll";
// import { NotificationData } from "./Data/NotificationData";
// import { List } from "../../common/List/List";
import { NotificationCountContext } from "../../../utils/contexts/NotificationCountContext";
import { HubConnectionBuilder } from "@microsoft/signalr";
import { GetDataWithAuthorization } from "../../../backend/axios/AxiosService2";

export const HeaderNotification = () => {
  const [connection, setConnection] = useState(null);
  const { notificationCount, RemoveOne, RemoveAll, HandleChange } = useContext(
    NotificationCountContext
  );
  const token = localStorage.getItem("token");
  const [list, setList] = useState([]);

  useEffect(() => {
    const getList = async () => {
      // NotificationAudio();
      try {
        const response = await GetDataWithAuthorization(
          "/notification/getallnotifications"
        );
        setList(response?.data);
      } catch (error) {
        console.log("error from notification list:", error);
      }
    };
    console.log("list getting");
    getList();
  }, []);

  useEffect(() => {
    const createConnection = async () => {
      const newConnection = new HubConnectionBuilder()
        .withUrl(`https://service2.stg.mn/webapihub`, {
          accessTokenFactory: () => token,
        })
        .build();

      try {
        newConnection.on("NotificationUpdate", (data) => {
          console.log("connection data:", data);
          // Parse the JSON string to get the JavaScript object
          const jsonObject = JSON.parse(data);
          // Check if 'count' property exists in the jsonObject
          if (jsonObject && jsonObject.count !== undefined) {
            // Access the "count" property
            const countValue = jsonObject.count;
            // Set the count value in state or wherever it's needed
            // setNotificationCount(countValue);
            HandleChange(countValue);
            // NotificationAudio();
          } else {
            console.error("Invalid notificationCount message:", data);
          }
        });
        await newConnection.start();
        console.log("SignalR connection established.");
        setConnection(newConnection);
      } catch (error) {
        console.error("Error establishing SignalR connection:", error);
      }
    };

    if (token) {
      createConnection();
    }

    return () => {
      // Clean up the connection when the component unmounts
      if (connection) {
        connection.stop();
      }
    };
  }, [token]);

  const onClick = async () => {
    console.log("clicked");
    // NotificationAudio();
    try {
      const response = await GetDataWithAuthorization(
        "/notification/getallnotifications"
      );
      setList(response?.data);
    } catch (error) {
      console.log("error from notification list:", error);
    }
  };

  return (
    <Dropdown
      overlay={
        <Card
          style={{
            backgroundColor: "#1D3049",
            borderWidth: 0,
            width: "400px",
          }}
        >
          {list.slice(0, 10).map((prop, index) => {
            return (
              <div key={index} className="mb-3">
                <NotificationElement
                  text={prop?.message}
                  seen={prop?.seen}
                  date={prop?.createDate}
                  number={prop?.number}
                  id={prop?.id}
                  customerId={prop?.customerId}
                  reRender={onClick}
                  RemoveOne={RemoveOne}
                />
              </div>
            );
          })}
          <div className="flex justify-between text-white">
            <ViewAll />
            <MarkAll RemoveAll={RemoveAll} reRender={onClick} />
          </div>
        </Card>
      }
    >
      <Badge count={notificationCount}>
        <div className="cursor-pointer">
          <NotificationIcon />
        </div>
      </Badge>
    </Dropdown>
  );
};
