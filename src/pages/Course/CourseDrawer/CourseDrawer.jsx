import { Drawer, Button, ConfigProvider } from "antd";
export const CourseDrawer = ({
  title,
  onClose,
  open,
  image,
  content,
  intro,
}) => {
  return (
    <Drawer title={title} onClose={onClose} open={open}>
      <img src={image} className=" aspect-video rounded-lg mb-4" />
      <div className=" text-base font-bold">Хураангуй</div>
      <div>{content}</div>
      <div className="text-base font-bold mt-4">Олж авах чадвар</div>
      <div>{intro}</div>
      <div className="flex justify-between items-center mt-4">
        <ConfigProvider
          theme={{
            token: {
              colorPrimaryHover: "#FFFFFF",
              colorText: "#FFFFFF",
              colorPrimaryActive: "#FFFFFF",
            },
          }}
        >
          <Button
            className="bg-[#0074E0]"
            //   onClick={() => navigate(`/courseWatch/${prop.id}`)}
          >
            Одоо үзье
          </Button>
        </ConfigProvider>
        <Button onClick={onClose}>Дараа үзье</Button>
      </div>
    </Drawer>
  );
};
