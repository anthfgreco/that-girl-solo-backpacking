import { useState } from "react";
import clsx from "clsx";
import Link from "next/link";
import Image from "next/image";

// Took me **hours** to figure out why the navbar wasn't refreshing, apparently imports are case-sensitive
// for Fast Refresh in Next.js, extremely annoying. Use lowercase/snakeCase file names from now on.
// https://stackoverflow.com/a/72119164/20600987

const urlList = [
  ["/", "Home"],
  ["/blog", "Blog"],
  ["/destinations", "Destinations"],
  ["/travel-must-haves", "Travel Must Haves"],
  ["/contact", "Contact"],
];

export default function NavBar({ transparent }) {
  const [isNavOpen, setIsNavOpen] = useState(false);

  function toggleNav() {
    setIsNavOpen(!isNavOpen);
  }

  function closeNav() {
    setIsNavOpen(false);
  }

  const svgClass = clsx({ white_svg: transparent });

  return (
    <div
      className={clsx(
        "fixed top-0 z-50 flex h-16 w-full",
        {
          "bg-gradient-to-b from-black/25 text-white": transparent,
        },
        {
          "bg-white text-black": !transparent,
        }
      )}
    >
      <div className="flex w-full items-center xl:w-fit">
        <header className="whitespace-nowrap text-xl xl:text-3xl">
          <Link
            href="/"
            className={clsx("p-2", {
              hidden: transparent,
            })}
          >
            That Girl Solo Backpacking
          </Link>
        </header>

        <button
          className="relative ml-auto mr-4 p-2 xl:hidden"
          onClick={() => toggleNav()}
        >
          <Image
            src="/images/hamburger-menu-icon.svg"
            alt="Menu"
            width={25}
            height={25}
            className={svgClass}
            priority
          />
        </button>
      </div>

      <nav
        className={clsx(
          "ml-auto",
          {
            "fixed left-0 top-0 z-50 flex h-screen flex-col bg-white pl-6 pr-12 pt-6 text-black":
              isNavOpen,
          },
          {
            "hidden items-center xl:flex": !isNavOpen,
          }
        )}
      >
        {urlList.map(([url, name]) => (
          <span className="p-2" key={url}>
            <Link href={url} className="p-2" onClick={() => closeNav()}>
              {name}
            </Link>
          </span>
        ))}

        <a
          href="https://www.tiktok.com/@thatgirlsolobackpacking"
          target="_blank"
          rel="noreferrer"
          className="p-2"
        >
          <Image
            src="/images/tiktok-icon.svg"
            alt="TikTok"
            width={25}
            height={25}
            className={svgClass}
          />
        </a>
      </nav>

      <div
        className={clsx("fixed z-0 h-screen w-screen bg-black opacity-75", {
          hidden: !isNavOpen,
        })}
        onClick={() => closeNav()}
      ></div>
    </div>
  );
}
