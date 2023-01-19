import Header from "./Header/Header";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App h-screen w-screen">
      <Header />

      <br />

      <br />
      <div className="mx-10 lg:mx-auto lg:max-w-[675px]">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
