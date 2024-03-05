import React, { useState, useEffect, useContext } from "react";
// import { OrderDetail } from "../components/OrderDetail/OrderDetail";
import { IconButton } from "../../components/common/IconButton/IconButton";
import { GetDataWithAuthorization } from "../../backend/axios/AxiosService2";
import { PostDataWithAuthorization } from "../../backend/axios/AxiosService2";
import { SingleNotification } from "../../components/forSite/HeaderNotification/SingleNotification";
import { Dropdown } from "antd";
import { NotificationCountContext } from "../../utils/contexts/NotificationCountContext";

export const AllNotification = () => {
  return (
    <div className="px-[25%] py-[3vh]">
      <NotificationBackground title={"Мэдэгдэл"}>
        <NotificationPageText />
      </NotificationBackground>
    </div>
  );
};

export const NotificationBackground = ({ title, children }) => {
  return (
    <div className="">
      <div className=" text-[24px]">{title}</div>
      {/* bg-gradient-to-b from-[rgba(29,156,211,0.25)] via-[rgba(143,206,233,0.17)] via-99% to-transparent-[rgba(255,255,255,0.00)] */}
      <div className=" rounded-lg bg-[rgba(29,156,211,0.25)] px-[10%] py-[5vh] min-h-[90vh]">
        {children}
      </div>
    </div>
  );
};

export const NotificationPageText = () => {
  const [list, setList] = useState([]);
  const [secondList, setSecondList] = useState([]);
  const [modal, setModal] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const { RemoveOne, RemoveAll } = useContext(NotificationCountContext);
  // OrderDetailiig neehed tuslah state
  const [detail, setDetail] = useState({
    customerId: "",
    number: "",
  });
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await GetDataWithAuthorization(
          "/notification/getallnotifications"
        );
        console.log("response at notification page text:", response?.data);
        setList(response?.data);
      } catch (error) {
        console.log("error from notification list:", error);
      }
    };
    getData();
  }, [refresh]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await GetDataWithAuthorization(
          "/notification/getallnewnotifications"
        );
        setSecondList(response?.data);
      } catch (err) {
        console.log("error from unseen second list", err);
      }
    };
    getData();
  }, []);

  const markSeen = async (id) => {
    try {
      const response = await PostDataWithAuthorization(
        `/notification/markseen?id=${id}`
      );
      console.log("resp:", response);
      if (response.status === 200) {
        setRefresh(!refresh);
        RemoveOne();
      }
    } catch (error) {
      console.log("error from notification element", error);
    }
  };

  const deleteNotification = async (id) => {
    try {
      const response = await PostDataWithAuthorization(
        `/notification/DeleteNotification?id=${id}`
      );
      console.log("resp:", response);
      if (response.status === 200) {
        setRefresh(!refresh);
        RemoveOne();
      }
    } catch (error) {
      console.log("error from notification element", error);
    }
  };

  const onClick = ({ id, customerId, number }) => {
    setModal(true);
    setDetail({ customerId: customerId, number: number });
    markSeen(id);
  };

  const tabs = [
    { name: "Бүгд", id: 1 },
    { name: "Нээгээгүй", id: 2 },
  ];

  const [activeTabId, setActiveTabId] = useState(1);
  const renderList = activeTabId === 1 ? list : secondList;

  return (
    <div className="text-xs text-stg-color ">
      <div className="flex justify-between mb-2">
        <Tab
          tabs={tabs}
          activeTabId={activeTabId}
          setActiveTabId={setActiveTabId}
        />
        {/* <PopUp
          trigger={
            <div className="w-5 h-5">
              <IconButton
                threeDot={true}
                bgColor={"#FFFFFF"}
                hoverBgColor={"#E2E2E2"}
              />
            </div>
          }
          margin={10}
          location={"bottom center"}
        >
          <ListBackground reRender={setRefresh} RemoveAll={RemoveAll} />
        </PopUp> */}
        <Dropdown
          placement="bottomLeft"
          dropdownRender={() => (
            <ListBackground reRender={setRefresh} RemoveAll={RemoveAll} />
          )}
        >
          <div className="w-5 h-5">
            <IconButton
              threeDot={true}
              bgColor={"#FFFFFF"}
              hoverBgColor={"#E2E2E2"}
            />
          </div>
        </Dropdown>
      </div>
      {renderList.map((prop, index) => {
        return (
          <div className="flex justify-between mb-5">
            <div className="w-[60%]">
              <SingleNotification
                text={prop?.message}
                seen={prop?.seen}
                date={prop?.createDate}
                key={index}
                onClick={() =>
                  onClick({
                    id: prop?.id,
                    customerId: prop?.customerId,
                    number: prop?.number,
                  })
                }
              />
            </div>
            <div className="flex flex-row items-center">
              <div
                className={`rounded-full w-3 h-3 bg-stg-color mr-4 ${
                  prop?.seen && "hidden"
                }`}
              ></div>
              <div className="w-5 h-5">
                <IconButton
                  cancel={true}
                  onClickFunction={() => deleteNotification(prop?.id)}
                />
              </div>
            </div>
          </div>
        );
      })}
      {/* {modal && (
        <OrderDetail
          selectedOption={detail.customerId}
          closeModal={() => setModal(false)}
          type={detail.number ? (detail.number.startsWith("Ү") ? 1 : 0) : 0}
          number={detail.number}
        />
      )} */}
    </div>
  );
};

export const ListBackground = ({ reRender, RemoveAll }) => {
  const markSeenAll = async () => {
    console.log("mark seen all");
    try {
      const response = await PostDataWithAuthorization(
        "/notification/markseenall",
        {}
      );
      console.log("response of mark seen all", response);
      if (response.status === 200) {
        localStorage.setItem("notificationCount", 0);
        reRender((previous) => !previous);
        RemoveAll();
      }
    } catch (error) {
      console.log("error from mark seen all:", error);
    }
  };

  const deleteAll = async () => {
    console.log("Deleting all");
  };

  const list = [
    {
      name: "Бүгдийг уншсан болгох",
      func: markSeenAll,
    },
    {
      name: "Бүгдийг устгах",
      func: deleteAll,
    },
  ];

  return (
    <div className="rounded-lg bg-white p-[10px] w-[170px]">
      <MenuList list={list} />
    </div>
  );
};

export const MenuList = ({ list }) => {
  return (
    <React.Fragment>
      {list.map((prop, index) => {
        return (
          <div
            key={index}
            className=" hover:bg-slate-200 transform duration-200 cursor-pointer p-2"
            onClick={() => prop.func()}
          >
            {prop.name}
          </div>
        );
      })}
    </React.Fragment>
  );
};

// create tab component
export const TabButton = ({
  text,
  tabId,
  activeID,
  bgColor,
  noSelecBgColor,
  noSelectTextColor,
  textColor,
  onClick,
}) => {
  const backColor = bgColor || "#FFFFFF";
  const buttonStyle = {
    backgroundColor:
      tabId === activeID
        ? backColor
        : noSelecBgColor
        ? noSelecBgColor
        : "transparent",
    borderRadius: "8px",
    color:
      tabId === activeID
        ? textColor
          ? textColor
          : "black"
        : noSelectTextColor
        ? noSelectTextColor
        : "black",
  };
  return (
    <div
      onClick={onClick}
      className={` 
      flex items-center justify-center cursor-pointer mr-5 px-3 py-1 transition-all duration-300 ease-in-out h-10`}
      style={buttonStyle}
    >
      {text}
    </div>
  );
};

export const Tab = ({
  tabs,
  activeTabId,
  setActiveTabId,
  bgColor,
  noSelecBgColor,
  noSelectTextColor,
  textColor,
  onClick,
}) => {
  return (
    <div className="flex items-center">
      {tabs.map((tabInfo) => (
        <TabButton
          key={tabInfo.id}
          onClick={() => {
            setActiveTabId(tabInfo.id);
            onClick && onClick();
          }}
          tabId={activeTabId}
          activeID={tabInfo.id}
          text={tabInfo.name}
          bgColor={bgColor}
          noSelecBgColor={noSelecBgColor}
          noSelectTextColor={noSelectTextColor}
          textColor={textColor}
        />
      ))}
    </div>
  );
};
