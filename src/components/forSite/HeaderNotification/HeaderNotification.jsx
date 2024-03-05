import { DropDown } from "../../common/DropDown/DropDown";
import { NotificationIcon } from "../../../assets/icons/NotificationIcon";
import { NotificationBadge } from "../../ui/NotificationBadge/NotificationBadge";
import { NotificationElement } from "./NotificationElement";
import { ViewAll } from "./ViewAll";
import { MarkAll } from "./MarkAll";
import { NotificationData } from "./Data/NotificationData";
import { List } from "../../common/List/List";
import { NotificationCountContext } from "../../../utils/contexts/NotificationCountContext";
import { HubConnectionBuilder } from "@microsoft/signalr";

export const HeaderNotification = () => {
  const [connection, setConnection] = useState(null);
  const { notificationCount, RemoveOne, RemoveAll, HandleChange } = useContext(
    NotificationCountContext
  );
  const token = localStorage.getItem("token");
  const [list, setList] = useState([]);

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

  const getMarginValue = () => {
    const screenWidth = window.innerWidth;
    // Define your logic to calculate margin based on screen width
    // For example, you can set different margins for different screen sizes
    if (screenWidth <= 1900) {
      return 15;
    } else {
      return 25;
    }
  };

  const isSmallScreen = () => {
    const screen = window.innerWidth;
    if (screen < 768) return true;
    return false;
  };

  return (
    <DropDown
      trigger={
        <NotificationBadge
          Badge={NotificationIcon}
          badgeHeight={25}
          badgeWidth={25}
          counterHeight={18}
          counterWidth={18}
          count={notificationCount}
          location={"top right"}
        />
      }
      onclick={onClick}
      location={"bottom center right"}
      margin={getMarginValue()}
      isSmallScreen={isSmallScreen()}
    >
      <div className="w-[400px] rounded-b-lg bg-[#1D3049] text-xs p-3">
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

        <div className="flex justify-between">
          <ViewAll />
          <MarkAll RemoveAll={RemoveAll} reRender={onClick} />
        </div>
      </div>
    </DropDown>
  );
};
