import { AppRoutes } from "./routes/AppRoutes";
import { ConfigProvider } from "antd";
import { NavList } from "./components/common/NavList/NavList";

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
