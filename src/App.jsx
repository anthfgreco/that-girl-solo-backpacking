import { useState } from "react";
import NavBar from "./NavBar";
import { Link, Outlet } from "react-router-dom";

// pl-[25%] pr-[25%]

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App p-5 sm:w-full md:w-[700px]">
      <Link to="/">
        <h1 className="text-center font-['headerFont'] text-4xl font-bold text-purple-600">
          That Girl Solo Backpacking
        </h1>
      </Link>

      <NavBar />

      <br />

      <br />

      <Outlet />
    </div>
  );
}

export default App;
