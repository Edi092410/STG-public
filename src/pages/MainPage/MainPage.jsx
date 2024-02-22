import { Carousel } from "antd";

export const MainPage = () => {
  const images = [
    {
      src: "https://cdn.pixabay.com/photo/2018/12/14/23/16/christmas-3876024_1280.jpg",
      name: "phone",
      title: "Phone",
      description: "Phone phone phone phone phone phone phone phone",
    },
    {
      src: "https://cdn.pixabay.com/photo/2015/03/20/17/44/faroes-682611_1280.jpg",
      name: "boat",
      title: "Phone",
      description: "Phone phone phone phone phone phone phone phone",
    },
    {
      src: "https://cdn.pixabay.com/photo/2016/01/07/16/45/pillory-1126124_1280.jpg",
      name: "wood",
      title: "Phone",
      description: "Phone phone phone phone phone phone phone phone",
    },
  ];
  return (
    <div className="flex flex-col items-center">
      <Carousel autoplay className="w-[70vw] h-[25vw] bg-stg-color">
        {images.map((image, index) => (
          <div className="relative h-[25vw] w-full">
            <img
              src={image.src}
              alt={image.name}
              className=" h-[25vw] w-full object-contain "
            />
            <div className="absolute left-1/2 -translate-x-1/2 bottom-6 text-center text-base text-white">
              <div className="font-bold">{image.title}</div>
              <div>{image.description}</div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};
