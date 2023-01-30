import { Outlet } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";

function App() {
  return (
    <div className="App h-screen w-screen">
      <ScrollToTop />
      <Outlet />
    </div>
  );
}

export default App;
