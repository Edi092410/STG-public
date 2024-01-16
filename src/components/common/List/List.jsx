import React from "react";
export const List = ({
  lists,
  ulclassName,
  liclassName,
  ListElement,
  elementProps,
}) => {
  return (
    <React.Fragment>
      <ul className={`${ulclassName}`}>
        {lists.map((prop, index) => (
          <li key={index} className={`${liclassName}`}>
            {ListElement({ ...prop, ...elementProps })}
          </li>
        ))}
      </ul>
    </React.Fragment>
  );
};
