import { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import NavBar from "@/components/navbar";
import Date from "@/components/date";

export default function FullImageLayout({ children, imageURL, title, date }) {
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
          src={"/images/" + imageURL}
          alt=""
          fill
          className="object-cover"
        />
        <div className="relative h-full w-full bg-black bg-opacity-50" />
      </div>

      <div className="flex h-screen w-screen flex-col items-center justify-center">
        <span className="px-3 text-center text-white">
          <h1 className="text-center text-4xl text-white">{title}</h1>
          <br />
          {date && (
            <p className="text-sm">
              Posted on <Date dateString={date} />
            </p>
          )}
        </span>
      </div>

      <main className="w-full bg-white">{children}</main>
    </div>
  );
}
