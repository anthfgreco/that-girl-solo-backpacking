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

      <Outlet />
    </div>
  );
}

export default App;
