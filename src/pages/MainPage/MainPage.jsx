import { Slider } from "./Slider/Slider";
import { Breadcrumb1 } from "../../components/common/Breadcrumb1/Breadcrumb1";
import { FeatureNews } from "./FeatureNews/FeatureNews";
export const MainPage = () => {
  return (
    <div className="">
      <Breadcrumb1 className="my-4" items={[{ title: "Нүүр" }]} />
      <div className=" lg:-mx-[10vw] flex justify-center">
        <Slider />
      </div>
      <div className="mb-12">
        <FeatureNews />
      </div>
    </div>
  );
};
