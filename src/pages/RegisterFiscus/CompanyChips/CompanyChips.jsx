import { Button, Input, Tag, Tooltip } from "antd";

export const CompanyChips = ({
  tags,
  setTags,
  inputValue,
  setInputValue,
  handleInputConfirm,
}) => {
  const handleClose = (removedTag) => {
    // Find the index of the removed tag
    const index = tags.names.indexOf(removedTag);

    // Ensure the tag exists in the names array
    if (index !== -1) {
      // Create new arrays excluding the removed tag
      const newIds = tags.ids.filter((_, idx) => idx !== index);
      const newNames = tags.names.filter((_, idx) => idx !== index);

      // Update the state with the new arrays
      setTags({ ids: newIds, names: newNames });
    }
  };
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      <div className="flex items-center justify-between">
        <Tooltip title="Бүртгэлтэй регистрээ оруулна уу (Байгууллага эсвэл хувь хүн).">
          <Input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            onBlur={handleInputConfirm}
          />
        </Tooltip>

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
