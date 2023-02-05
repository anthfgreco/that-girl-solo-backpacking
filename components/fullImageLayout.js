import { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import NavBar from "@/components/navbar";

export default function FullImageLayout({ children }) {
  const [isTransparent, setTransparency] = useState(true);

  // Make header responsive to scrolling + window resizing
  useEffect(() => {
    window.addEventListener("scroll", updateTransparency);
    window.addEventListener("resize", updateTransparency);
    return () => {
      window.removeEventListener("scroll", updateTransparency);
      window.removeEventListener("resize", updateTransparency);
    };
  }, []);

  // Make header transparent after a full page scroll
  function updateTransparency() {
    window.scrollY >= window.innerHeight
      ? setTransparency(false)
      : setTransparency(true);
  }

  return (
    <div className="">
      <NavBar transparent={isTransparent} />

      <div className="fixed top-0 -z-10 h-screen w-screen">
        <Image
          src="/images/pexels-roberto-nickson-2559941.jpg"
          alt=""
          fill
          style={{ objectFit: "cover", overflow: "hidden" }}
        />
      </div>

      <div className="sticky top-0 h-screen w-screen"></div>

      <main className="w-full bg-white">{children}</main>
    </div>
  );
}

/*
{!home && (
  <div className="">
    <Link href="/">← Back to home</Link>
  </div>
)}
*/
