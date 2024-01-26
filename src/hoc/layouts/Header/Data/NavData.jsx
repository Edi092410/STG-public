import list from "../../../../assets/images/NavList/service.png";
import course from "../../../../assets/images/NavList/course.png";
export const NavData = () => {
  return [
    {
      name: "Шийдэл",
      to: "/",
      key: "product",
    },
    {
      name: "Харилцагчийн үйлчилгээ",
      key: "service",
      subLinks: [
        {
          name: "Үйлчилгээ",
          to: "/list",
          key: "list",
          image: list,
        },
        {
          name: "Сургалт",
          to: "/userGuide",
          key: "userGuide",
          image: course,
        },
      ],
    },
    {
      name: "Сургалт",
      to: "/course",
      key: "course",
    },
    {
      name: "Бичвэр",
      to: "/article",
      key: "article",
    },
  ];
};
