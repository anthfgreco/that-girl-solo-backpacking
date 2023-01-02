import { useState } from "react";
import NavBar from "./NavBar";
import { Link, Outlet } from "react-router-dom";

// pl-[25%] pr-[25%]

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App p-5 sm:w-full md:w-[700px]">
      <Link to="/">
        <header className="mb-5 text-center font-['headerFont'] text-5xl font-bold text-purple-600">
          That Girl Solo Backpacking
        </header>
      </Link>

      <NavBar />

      <br />

      <br />

      <Outlet />
    </div>
  );
}

export default App;
