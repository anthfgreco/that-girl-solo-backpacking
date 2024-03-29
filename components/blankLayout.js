import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import NavBar from "@/components/navbar";
import clsx from "clsx";

export default function BlankLayout({ children, column }) {
  return (
    <div className="">
      <NavBar />
      <div className="h-16"></div>
      <main className={clsx({ "mx-auto max-w-[600px] px-6": column })}>
        {children}
      </main>
    </div>
  );
}
