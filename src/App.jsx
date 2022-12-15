import { useState } from "react";
import NavBar from "./NavBar";
import { NavLink, Outlet } from "react-router-dom";

// pl-[25%] pr-[25%]

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App p-5 sm:w-full md:w-[700px]">
      <NavLink to="/">
        <h1 className="text-center font-['headerFont'] text-4xl font-bold text-purple-600">
          That Girl Solo Backpacking
        </h1>
      </NavLink>

      <NavBar />

      <br />

      <br />

      <Outlet />
    </div>
  );
}

export default App;
