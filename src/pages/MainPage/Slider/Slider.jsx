import { Carousel } from "antd";
import { useState, useEffect } from "react";
import { GetData } from "../../../backend/axios/AxiosAdmin";

export const Slider = () => {
  const [sliderItems, setSliderItems] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await GetData("/getSliders");
        setSliderItems(response?.data?.data);
      } catch (error) {
        // setError(error);
      }
    };
    fetchData();
  }, []);
  return (
    <Carousel autoplay className="w-[100vw] h-[30vw] bg-stg-color">
      {sliderItems.map((image, index) => (
        <div className="relative h-[30vw] w-full">
          <img
            src={image.image}
            alt={image.id}
            className=" h-[30vw] w-full object-cover "
          />
          {/* <div className="absolute left-1/2 -translate-x-1/2 bottom-6 text-center text-sm sm:text-base md:text-lg lg:text-xl text-white">
            <div className="font-bold">{image.title}</div>
            <div className="">{image.introduction}</div>
          </div> */}
        </div>
      ))}
    </Carousel>
  );
};
