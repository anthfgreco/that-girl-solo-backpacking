import { useState } from "react";
import Header from "./Header/Header";
import { Link, Outlet } from "react-router-dom";

// pl-[25%] pr-[25%]

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App w-screen">
      <Header />

      <br />

      <br />
      <div className="mx-10 mb-7 w-auto lg:mx-auto lg:max-w-[675px]">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
