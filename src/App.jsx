import { useEffect } from "react";
import { useLocation, Outlet } from "react-router-dom";

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="App h-screen w-screen">
      <Outlet />
    </div>
  );
}

export default App;
