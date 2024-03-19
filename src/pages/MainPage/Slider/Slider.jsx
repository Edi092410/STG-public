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
    // 100 x 30 baih yostoi
    // Delgetsendee bagtahgu bsan uchraas urguniig 99.1vw urttai bolgov
    <Carousel
      autoplay
      className="w-[99.1vw] lg:h-[25vw] h-[40vw]  rounded-lg lg:rounded-none bg-stg-color"
    >
      {sliderItems.map((image, index) => (
        <img
          src={image.image}
          alt={image.id}
          className="w-[99.1vw] lg:h-[25vw] h-[40vw]  rounded-lg lg:rounded-none  object-cover "
        />
      ))}
    </Carousel>
  );
};
