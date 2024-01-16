import React, { useState, useEffect, useRef } from "react";
import useOutsideClick from "../../../utils/hooks/useOutsideClick";

export const DropDown = ({
  trigger,
  children,
  onclick,
  location,
  margin,
  isSmallScreen,
}) => {
  const [modal, setModal] = useState(false);
  const triggerRef = useRef(null);
  const menuRef = useRef(null);

  useOutsideClick(menuRef, () => {
    setModal(false);
  });

  const calculatePosition = () => {
    const triggerRect =
      triggerRef.current && triggerRef.current.getBoundingClientRect();
    menuRef.current.style.display = "block";
    const menuRect = menuRef.current && menuRef.current.getBoundingClientRect();
    const rightSide = window.innerWidth - triggerRect.right;
    switch (location) {
      case "left":
        return {
          right: triggerRect.width + margin,
          top: triggerRect.height / 2 - menuRect.height / 2,
        };
      case "right":
        return {
          left: triggerRect.width + margin,
          top: (-1 * menuRect.height + triggerRect.height) / 2,
        };
      case "top left":
        return {
          right: triggerRect.width,
          top: -1 * (triggerRect.height + menuRect.height + margin),
        };

      case "top right":
        return {
          left: triggerRect.width,
          top: -1 * (triggerRect.height + menuRect.height + margin),
        };

      case "top center":
        return {
          right: (-1 * menuRect.width + triggerRect.width) / 2,
          top: -1 * (triggerRect.height + menuRect.height + margin),
        };
      // Add more cases as needed
      case "bottom right":
        return {
          left: triggerRect.width,
          top: triggerRect.height + margin,
        };
      case "bottom center right":
        if (rightSide > menuRect.width) {
          return {
            left: 0,
            top: triggerRect.height + margin,
          };
        } else {
          return {
            left: rightSide - menuRect.width,
            top: triggerRect.height + margin,
          };
        }

      case "bottom left":
        return {
          right: triggerRect.width,
          top: triggerRect.height + margin,
        };

      case "bottom center left":
        return {
          right: 0,
          top: triggerRect.height + margin,
        };

      case "bottom center":
        return {
          right: (-1 * menuRect.width + triggerRect.width) / 2,
          top: triggerRect.height + margin,
        };

      default:
        return {
          right: 0,
          top: 0,
        };
    }
  };

  const positionStyles =
    modal && !isSmallScreen ? calculatePosition() : { display: "none" };
  return (
    <div className="relative inline-block">
      <div
        ref={triggerRef}
        className={`${modal ? "pointer-events-none" : "cursor-pointer"}`}
        onClick={() => {
          setModal(true);
          if (onclick) {
            onclick();
          }
        }}
      >
        {trigger}
      </div>
      <div
        className="absolute"
        ref={menuRef}
        style={{
          zIndex: modal ? 1 : 0,
          ...positionStyles,
        }}
      >
        {children}
      </div>
    </div>
  );
};
