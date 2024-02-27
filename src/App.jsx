import { AppRoutes } from "./routes/AppRoutes";
import { ConfigProvider } from "antd";
import { CourseElement } from "./pages/Course/CourseElement/CourseElement";

function App() {
  return (
    <div className=" text-sm">
      <ConfigProvider
        theme={{
          components: {
            Menu: {
              horizontalItemHoverColor: "#FFF",
              horizontalItemSelectedColor: "#FFF",
              itemHoverColor: "#FFF",
              itemSelectedColor: "#FFF",
            },
          },
        }}
      >
        <AppRoutes />
      </ConfigProvider>
    </div>
  );
}
export default App;
