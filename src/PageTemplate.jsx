import { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { FaArrowDown } from "react-icons/fa";

import markdownComponents from "./MarkdownStyling";
import TransparentHeader from "./Headers/TransparentHeader";

function PageTemplate({ backgroundImageURL, title, date, markdown }) {
  const [arrowOpacity, setArrowOpacity] = useState(1.0);

  // Scroll listener
  // Resize listener to make arrow responsive to window resizing
  useEffect(() => {
    window.addEventListener("scroll", updateArrow);
    window.addEventListener("resize", updateArrow);
    return () => {
      window.removeEventListener("scroll", updateArrow);
      window.removeEventListener("resize", updateArrow);
    };
  }, []);

  function updateArrow() {
    let opacity = 1 - window.scrollY / (window.innerHeight / 2);
    setArrowOpacity(opacity);
  }

  return (
    <div>
      <TransparentHeader />

      <div
        className="fixed -z-10 h-screen w-screen bg-center bg-no-repeat"
        style={{ backgroundImage: backgroundImageURL }}
      ></div>

      <div className="flex h-screen flex-col items-center justify-center bg-black bg-opacity-25">
        <h1 className="mx-5 mb-5 text-center font-annieUseYourTelescope text-6xl tracking-wider text-white lg:mx-60">
          {title}
        </h1>
        <p className="text-white">{date}</p>
        <span
          className="absolute bottom-1 animate-bounce text-2xl text-white"
          style={{ opacity: arrowOpacity }}
        >
          <FaArrowDown />
        </span>
      </div>

      <div className="bg-white">
        <br />
        <article>
          <ReactMarkdown children={markdown} components={markdownComponents} />
        </article>
        <br />
      </div>
    </div>
  );
}

export default PageTemplate;
