import { Card } from "antd";

export const FeatureNews = () => {
  const items = [
    {
      name: "cable",
      src: "https://randomwordgenerator.com/img/picture-generator/57e8d7414a56ac14f1dc8460962e33791c3ad6e04e50744172297bd69745c2_640.jpg",
      date: "2024-01-02",
      title: "Cable management",
      description:
        "Cable management shuu hu. Ahiad ng cable management shuu hu. ",
    },
    {
      name: "bulb",
      src: "https://randomwordgenerator.com/img/picture-generator/54e7d4404f54ab14f1dc8460962e33791c3ad6e04e50744172277ed79145c0_640.jpg",
      date: "2024-01-02",
      title: "Cable management asdkfja;lsfdja;slfd asldkfj alsdkfj asldfj",
      description:
        "Cable management shuu hu. Ahiad ng cable management shuu hu. Cable management shuu hu. Ahiad ng cable management shuu hu.",
    },
    {
      name: "yoga",
      src: "https://randomwordgenerator.com/img/picture-generator/dance-3134828_640.jpg",
      date: "2024-01-02",
      title: "Cable management",
      description:
        "Cable management shuu hu. Ahiad ng cable management shuu hu. ",
    },
  ];
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
                  alt={item.name}
                  src={item.src}
                  className="h-[200px] w-full object-cover"
                />
              }
              className=" hover:shadow-2xl transform duration-300 w-full"
            >
              <div className=" font-bold text-lg text-center">{item.title}</div>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};
