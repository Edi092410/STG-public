import { AppRoutes } from "./routes/AppRoutes";
import { ConfigProvider } from "antd";
import { AuthProvider } from "./utils/contexts/AuthProvider";
import { NotificationCountProvider } from "./utils/contexts/NotificationCountContext";
import { CompanyChips } from "./pages/RegisterFiscus/CompanyChips/CompanyChips";

function App() {
  return (
    <div className=" text-sm">
      <AuthProvider>
        <NotificationCountProvider>
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
            {/* <AppRoutes /> */}
            <CompanyChips />
          </ConfigProvider>
        </NotificationCountProvider>
      </AuthProvider>
    </div>
  );
}
export default App;
