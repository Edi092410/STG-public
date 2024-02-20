export const Card = ({
  className,
  textClassName,
  location,
  text,
  children,
}) => {
  return (
    <div
      className={`flex ${
        location === "right" || location === "left" ? " flex-row" : "flex-col"
      }`}
    >
      {location === "top" || location === "left" ? (
        <div className={`flex justify-center items-center ${textClassName}`}>
          {text}
        </div>
      ) : null}
      <div className={className}>{children}</div>
      {location === "bottom" || location === "right" ? (
        <div className={`flex justify-center items-center ${textClassName}`}>
          {text}
        </div>
      ) : null}
    </div>
  );
};
