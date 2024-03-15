import { Card } from "antd";
import { useEffect, useState } from "react";
import { GetData } from "../../../backend/axios/AxiosAdmin";

export const FeatureNews = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await GetData("/articles");
        setItems(response?.data?.data);
      } catch (error) {
        // setError(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="">
      <div className="w-full text-center font-bold text-2xl my-6">
        Мэдээ, мэдээлэл
      </div>
      <div className=" grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-center">
        {items.map((item, index) => (
          <div className=" flex justify-center mb-8">
            <Card
              style={{ width: 400 }}
              cover={
                <img
                  alt={item.title}
                  src={item.thumbnall}
                  className="h-[200px] w-full object-cover"
                />
              }
              className=" hover:shadow-2xl transform duration-300 w-full"
            >
              <div className=" font-semibold text-lg text-center">
                {item.title}
              </div>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};
