import React from "react";
import { Counter } from "./Counter";
import PropTypes from "prop-types";

export const NotificationBadge = ({
  Badge,
  location,
  count,
  badgeWidth,
  badgeHeight,
  counterHeight,
  counterWidth,
}) => {
  console.log("height", (-1 * counterHeight) / 2);
  console.log("width", (-1 * counterWidth) / 2);
  const calculatePosition = () => {
    switch (location) {
      case "top left":
        return {
          top: `${(-1 * counterHeight) / 2}px`,
          left: `${(-1 * counterWidth) / 2}px`,
        };
      case "top right":
        return {
          top: `${(-1 * counterHeight) / 2}px`,
          right: `${(-1 * counterWidth) / 2}px`,
        };
      case "bottom left":
        return {
          bottom: `${(-1 * counterHeight) / 2}px`,
          left: `${(-1 * counterWidth) / 2}px`,
        };
      case "bottom right":
        return {
          bottom: `${(-1 * counterHeight) / 2}px`,
          right: `${(-1 * counterWidth) / 2}px`,
        };
    }
  };

  const positionStyles = calculatePosition();

  return (
    <div
      className={`relative`}
      style={{ width: `${badgeWidth}px`, height: `${badgeHeight}` }}
    >
      <div>
        <Badge />
      </div>
      <div className="absolute" style={positionStyles}>
        <Counter count={count} height={counterHeight} width={counterWidth} />
      </div>
    </div>
  );
};

NotificationBadge.proptypes = {
  Badge: PropTypes.elementType.isRequired,
  location: PropTypes.oneOf([
    "top left",
    "top right",
    "bottom left",
    "bottom right",
  ]),
  count: PropTypes.number.isRequired,
  badgeWidth: PropTypes.number.isRequired,
  badgeHeight: PropTypes.number.isRequired,
  counterHeight: PropTypes.number.isRequired,
  counterWidth: PropTypes.number.isRequired,
};

NotificationBadge.defaultProps = {
  location: "top right",
};
