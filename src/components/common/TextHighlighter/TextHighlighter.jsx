export const TextHighlighter = ({ text, search }) => {
  if (!search) {
    return <>{text}</>;
  }

  const parts = text.split(new RegExp(`(${search})`, "gi"));

  return (
    <>
      {parts.map((part, index) => (
        <span
          key={index}
          style={
            part.toLowerCase() === search.toLowerCase()
              ? { backgroundColor: "#ffc069" }
              : {}
          }
        >
          {part}
        </span>
      ))}
    </>
  );
};
