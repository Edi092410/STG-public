import React from "react";
import { ListHead } from "./ListHead";
import { ListBody } from "./ListBody";
import { ListFoot } from "./ListFoot";
export const List = ({ head, body, foot, seperator }) => {
  return (
    <div>
      {head && <ListHead head={head} />}
      {body && <ListBody lists={body} seperator={seperator} />}
      {foot && <ListFoot foot={foot} />}
    </div>
  );
};
