import { AppRoutes } from "./routes/AppRoutes";
import { ConfigProvider } from "antd";
import { AuthProvider } from "./utils/contexts/AuthProvider";

function App() {
  return (
    <div className=" text-sm">
      <AuthProvider>
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
      </AuthProvider>
    </div>
  );
}
export default App;
