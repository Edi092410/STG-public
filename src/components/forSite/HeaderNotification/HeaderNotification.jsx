import React from "react";
import { PopUp } from "../../common/PopUp/PopUp";
import { NotificationTrigger } from "./NotificationTrigger";
import { NotificationElement } from "./NotificationElement";
import { ViewAll } from "./ViewAll";
import { MarkAll } from "./MarkAll";
NotificationElement;
export const HeaderNotification = () => {
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

  const onClick = async () => {
    console.log("Pop up");
  };

  const list = [
    {
      id: 410,
      number: "Ү231200265",
      email: "bia.novelsoft@gmail.com",
      customerId: "000bf50e-fcc6-49f4-b5aa-e984fd163a82",
      notifType: "service",
      message:
        "Таны 12/6/2023 3:28:27 PM -нд гаргасан үйлчилгээний хүсэлтийн ажил хийгдэж дууслаа.",
      seen: false,
      createDate: "2023-12-06T15:29:26",
      seenDate: null,
    },
    {
      id: 409,
      number: "Ү231200265",
      email: "bia.novelsoft@gmail.com",
      customerId: "000bf50e-fcc6-49f4-b5aa-e984fd163a82",
      notifType: "service",
      message:
        "Таны 12/6/2023 3:28:27 PM -нд гаргасан үйлчилгээний хүсэлтийн ажил эхэлсэн.",
      seen: true,
      createDate: "2023-12-06T15:29:21",
      seenDate: null,
    },
    {
      id: 408,
      number: "Ү231200260",
      email: "bia.novelsoft@gmail.com",
      customerId: "000bf50e-fcc6-49f4-b5aa-e984fd163a82",
      notifType: "service",
      message:
        "Таны 12/6/2023 2:47:57 PM -нд гаргасан үйлчилгээний хүсэлтийн ажил хийгдэж дууслаа.",
      seen: true,
      createDate: "2023-12-06T15:28:58",
      seenDate: null,
    },
    {
      id: 407,
      number: "Ү231200260",
      email: "bia.novelsoft@gmail.com",
      customerId: "000bf50e-fcc6-49f4-b5aa-e984fd163a82",
      notifType: "service",
      message:
        "Таны 12/6/2023 2:47:57 PM -нд гаргасан үйлчилгээний хүсэлтийн ажил эхэлсэн.",
      seen: false,
      createDate: "2023-12-06T15:28:54",
      seenDate: null,
    },
    {
      id: 373,
      number: "Ү231200214",
      email: "bia.novelsoft@gmail.com",
      customerId: "000bf50e-fcc6-49f4-b5aa-e984fd163a82",
      notifType: "service",
      message:
        "Таны 12/5/2023 6:01:44 PM -нд гаргасан үйлчилгээний хүсэлтийн ажил хийгдэж дууслаа.",
      seen: false,
      createDate: "2023-12-06T10:29:44",
      seenDate: null,
    },
    {
      id: 367,
      number: "Ү231200211",
      email: "bia.novelsoft@gmail.com",
      customerId: "000bf50e-fcc6-49f4-b5aa-e984fd163a82",
      notifType: "service",
      message:
        "Таны 12/5/2023 5:01:22 PM -нд гаргасан үйлчилгээний хүсэлтийн ажил хийгдэж дууслаа.",
      seen: false,
      createDate: "2023-12-06T09:47:30",
      seenDate: null,
    },
    {
      id: 366,
      number: "Ү231200194",
      email: "bia.novelsoft@gmail.com",
      customerId: "000bf50e-fcc6-49f4-b5aa-e984fd163a82",
      notifType: "service",
      message:
        "Таны 12/5/2023 2:32:10 PM -нд гаргасан үйлчилгээний хүсэлтийн ажил хийгдэж дууслаа.",
      seen: true,
      createDate: "2023-12-06T09:47:21",
      seenDate: null,
    },
    {
      id: 361,
      number: "Ү231200214",
      email: "bia.novelsoft@gmail.com",
      customerId: "000bf50e-fcc6-49f4-b5aa-e984fd163a82",
      notifType: "service",
      message:
        "Таны 12/5/2023 6:01:44 PM -нд гаргасан үйлчилгээний хүсэлтийн ажил эхэлсэн.",
      seen: false,
      createDate: "2023-12-06T09:37:55",
      seenDate: null,
    },
    {
      id: 360,
      number: "Ү231200194",
      email: "bia.novelsoft@gmail.com",
      customerId: "000bf50e-fcc6-49f4-b5aa-e984fd163a82",
      notifType: "service",
      message:
        "Таны 12/5/2023 2:32:10 PM -нд гаргасан үйлчилгээний хүсэлтийн ажил эхэлсэн.",
      seen: false,
      createDate: "2023-12-06T09:37:33",
      seenDate: null,
    },
    {
      id: 359,
      number: "Ү231200160",
      email: "bia.novelsoft@gmail.com",
      customerId: "000bf50e-fcc6-49f4-b5aa-e984fd163a82",
      notifType: "service",
      message:
        "Таны 12/5/2023 10:27:03 AM -нд гаргасан үйлчилгээний хүсэлтийн ажил хийгдэж дууслаа.",
      seen: false,
      createDate: "2023-12-06T09:37:22",
      seenDate: null,
    },
    {
      id: 358,
      number: "Ү231200211",
      email: "bia.novelsoft@gmail.com",
      customerId: "000bf50e-fcc6-49f4-b5aa-e984fd163a82",
      notifType: "service",
      message:
        "Таны 12/5/2023 5:01:22 PM -нд гаргасан үйлчилгээний хүсэлтийн ажил эхэлсэн.",
      seen: false,
      createDate: "2023-12-06T09:37:10",
      seenDate: null,
    },
    {
      id: 336,
      number: "Ү231200160",
      email: "bia.novelsoft@gmail.com",
      customerId: "000bf50e-fcc6-49f4-b5aa-e984fd163a82",
      notifType: "service",
      message:
        "Таны 12/5/2023 10:27:03 AM -нд гаргасан үйлчилгээний хүсэлтийн ажил эхэлсэн.",
      seen: false,
      createDate: "2023-12-05T14:58:32",
      seenDate: null,
    },
    {
      id: 335,
      number: "Ү231200159",
      email: "bia.novelsoft@gmail.com",
      customerId: "000bf50e-fcc6-49f4-b5aa-e984fd163a82",
      notifType: "service",
      message:
        "Таны 12/5/2023 10:21:51 AM -нд гаргасан үйлчилгээний хүсэлтийн ажил эхэлсэн.",
      seen: false,
      createDate: "2023-12-05T14:58:16",
      seenDate: null,
    },
    {
      id: 305,
      number: "Ү231200137",
      email: "bia.novelsoft@gmail.com",
      customerId: "000bf50e-fcc6-49f4-b5aa-e984fd163a82",
      notifType: "service",
      message:
        "Таны 12/4/2023 4:20:58 PM -нд гаргасан үйлчилгээний хүсэлтийн ажил хийгдэж дууслаа.",
      seen: false,
      createDate: "2023-12-05T09:22:14",
      seenDate: null,
    },
    {
      id: 289,
      number: "Ү231200137",
      email: "bia.novelsoft@gmail.com",
      customerId: "000bf50e-fcc6-49f4-b5aa-e984fd163a82",
      notifType: "service",
      message:
        "Таны 12/4/2023 4:20:58 PM -нд гаргасан үйлчилгээний хүсэлтийн ажил эхэлсэн.",
      seen: false,
      createDate: "2023-12-04T16:32:07",
      seenDate: null,
    },
    {
      id: 282,
      number: "Ү231200106",
      email: "bia.novelsoft@gmail.com",
      customerId: "000bf50e-fcc6-49f4-b5aa-e984fd163a82",
      notifType: "service",
      message:
        "Таны 12/4/2023 2:25:11 PM -нд гаргасан үйлчилгээний хүсэлтийн ажил эхэлсэн.",
      seen: false,
      createDate: "2023-12-04T15:56:54",
      seenDate: null,
    },
    {
      id: 159,
      number: "Ү231101136",
      email: "bia.novelsoft@gmail.com",
      customerId: "000bf50e-fcc6-49f4-b5aa-e984fd163a82",
      notifType: "service",
      message:
        "Таны 11/30/2023 3:50:56 PM -нд гаргасан үйлчилгээний хүсэлтийн ажил хийгдэж дууслаа.",
      seen: false,
      createDate: "2023-11-30T16:22:36",
      seenDate: null,
    },
    {
      id: 158,
      number: "Ү231101136",
      email: "bia.novelsoft@gmail.com",
      customerId: "000bf50e-fcc6-49f4-b5aa-e984fd163a82",
      notifType: "service",
      message:
        "Таны 11/30/2023 3:50:56 PM -нд гаргасан үйлчилгээний хүсэлтийн ажил эхэлсэн.",
      seen: false,
      createDate: "2023-11-30T16:22:25",
      seenDate: null,
    },
    {
      id: 150,
      number: "Ү231101125",
      email: "bia.novelsoft@gmail.com",
      customerId: "000bf50e-fcc6-49f4-b5aa-e984fd163a82",
      notifType: "service",
      message:
        "Таны 11/30/2023 3:00:24 PM -нд гаргасан үйлчилгээний хүсэлтийн ажил хийгдэж дууслаа.",
      seen: false,
      createDate: "2023-11-30T15:17:39",
      seenDate: null,
    },
    {
      id: 148,
      number: "Ү231101125",
      email: "bia.novelsoft@gmail.com",
      customerId: "000bf50e-fcc6-49f4-b5aa-e984fd163a82",
      notifType: "service",
      message:
        "Таны 11/30/2023 3:00:24 PM -нд гаргасан үйлчилгээний хүсэлтийн ажил эхэлсэн.",
      seen: false,
      createDate: "2023-11-30T15:17:10",
      seenDate: null,
    },
    {
      id: 123,
      number: "Ү231101069",
      email: "bia.novelsoft@gmail.com",
      customerId: "000bf50e-fcc6-49f4-b5aa-e984fd163a82",
      notifType: "service",
      message:
        "Таны 11/29/2023 6:14:50 PM -нд гаргасан үйлчилгээний хүсэлтийн ажил хийгдэж дууслаа.",
      seen: false,
      createDate: "2023-11-30T09:32:06",
      seenDate: null,
    },
    {
      id: 120,
      number: "Ү231101069",
      email: "bia.novelsoft@gmail.com",
      customerId: "000bf50e-fcc6-49f4-b5aa-e984fd163a82",
      notifType: "service",
      message:
        "Таны 11/29/2023 6:14:50 PM -нд гаргасан үйлчилгээний хүсэлтийн ажил эхэлсэн.",
      seen: false,
      createDate: "2023-11-30T09:28:32",
      seenDate: null,
    },
    {
      id: 28,
      number: "Ү231100898",
      email: "bia.novelsoft@gmail.com",
      customerId: "000bf50e-fcc6-49f4-b5aa-e984fd163a82",
      notifType: "service",
      message:
        "Таны 11/24/2023 2:32:33 PM -нд гаргасан үйлчилгээний хүсэлтийн ажил хийгдэж дууслаа.",
      seen: false,
      createDate: "2023-11-27T09:32:40",
      seenDate: null,
    },
    {
      id: 27,
      number: "Ү231100898",
      email: "bia.novelsoft@gmail.com",
      customerId: "000bf50e-fcc6-49f4-b5aa-e984fd163a82",
      notifType: "service",
      message:
        "Таны 11/24/2023 2:32:33 PM -нд гаргасан үйлчилгээний хүсэлтийн ажил эхэлсэн.",
      seen: false,
      createDate: "2023-11-27T09:32:37",
      seenDate: null,
    },
    {
      id: 13,
      number: "Ү231100860",
      email: "bia.novelsoft@gmail.com",
      customerId: "000bf50e-fcc6-49f4-b5aa-e984fd163a82",
      notifType: "service",
      message:
        "Таны 11/23/2023 12:14:08 PM -нд гаргасан үйлчилгээний хүсэлтийн ажил хийгдэж дууслаа.",
      seen: false,
      createDate: "2023-11-23T14:47:14",
      seenDate: null,
    },
  ];

  const RemoveOne = () => {
    console.log("Removed one");
  };
  const RemoveAll = () => {
    console.log("Removed all");
  };
  return (
    <PopUp
      trigger={<NotificationTrigger count={3} />}
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
    </PopUp>
  );
};
