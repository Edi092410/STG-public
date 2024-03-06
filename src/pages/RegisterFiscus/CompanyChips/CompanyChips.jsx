import { Button, Input, Tag, Tooltip } from "antd";

export const CompanyChips = ({
  tags,
  setTags,
  inputValue,
  setInputValue,
  handleInputConfirm,
}) => {
  const handleClose = (removedTag) => {
    const newTags = tags.filter((tag) => tag !== removedTag);
    console.log(newTags);
    setTags(newTags);
  };
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      <div className="flex items-center justify-between">
        <Input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onBlur={handleInputConfirm}
        />
        <Button onClick={handleInputConfirm}>Хайх</Button>
      </div>

      {tags.names.map((tag, index) => {
        const isLongTag = tag.length > 20;
        const tagElem = (
          <Tag
            key={index}
            closable
            style={{
              userSelect: "none",
            }}
            onClose={() => handleClose(tag)}
          >
            <span>{isLongTag ? `${tag.slice(0, 20)}...` : tag}</span>
          </Tag>
        );
        return isLongTag ? (
          <Tooltip title={tag} key={tag}>
            {tagElem}
          </Tooltip>
        ) : (
          tagElem
        );
      })}
    </div>
  );
};
