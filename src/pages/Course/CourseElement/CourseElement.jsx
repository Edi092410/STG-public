import { Button, Card, ConfigProvider } from "antd";
import { ProfileIcon } from "../../../assets/icons/ProfileIcon";
import { CourseDrawer } from "../CourseDrawer/CourseDrawer";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { DateResult } from "../../../utils/functions/DateResult";

export const CourseElement = ({
  image,
  author,
  lessons,
  title,
  intro,
  content,
  id,
  date,
}) => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  const Intro = () => {
    if (intro.length > 100)
      return (
        <div>
          {intro.substring(0, 100)}
          <span
            className="hover:bg-slate-300 rounded-md transition duration-200 cursor-pointer ml-1"
            onClick={showDrawer}
          >
            .......
          </span>
        </div>
      );
    else return <div>{intro}</div>;
  };

  const navigate = useNavigate();

  return (
    <>
      <Card
        style={{ width: "300px" }}
        className=" hover:shadow-lg transition duration-200"
      >
        <div className="">
          <img src={image} className=" aspect-video rounded-lg" />
          <div className="flex items-center justify-between mt-2">
            <div className="flex items-center ">
              <div className=" flex justify-center items-center w-4 h-4 bg-stg-color rounded-full">
                <ProfileIcon color={"#ffffff"} size={20} />
              </div>
              <div className="ml-1">{author}</div>
            </div>
            <div className=" text-slate-400">{lessons} хичээл</div>
          </div>
          <div className=" text-base font-bold text-stg-color my-2">
            {title}
          </div>
          <Intro />
          <div className=" text-slate-400">{DateResult({ date: date })}</div>
          <div className=" mt-auto float-right">
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
                className="bg-[#0074E0] mt-2"
                onClick={() => navigate(`/dashboard/courseWatch/${id}`)}
              >
                Одоо үзье
              </Button>
            </ConfigProvider>
          </div>
        </div>
      </Card>
      <CourseDrawer
        title={title}
        onClose={onClose}
        open={open}
        image={image}
        content={content}
        intro={intro}
        id={id}
      />
    </>
  );
};
