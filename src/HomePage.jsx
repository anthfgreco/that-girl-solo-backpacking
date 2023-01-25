import { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { FaArrowDown } from "react-icons/fa";

import markdownComponents from "./MarkdownStyling";
import TransparentHeader from "./Headers/TransparentHeader";

let markdown = `
  Three years ago, my life felt static. I was stuck in a job I was over-qualified for, making a crappy salary. The upside was that I had an incredible boss who let me disappear to the other side of the world on a whim when I couldn’t figure out what came next and needed some *inspiration*.

  Fast forward, three years later, I celebrated my 27th birthday after spending the year backpacking Europe and seeing fifteen different countries in the span of three months. A few days after that birthday, I hopped back onto a plane to backpack southeast Asia with a tour group I fell in love with and a boy, who later paid for my flight over to his hometown in Australia to explore where the road may have taken us. I had been at the company I was working for as a banker for the last almost-seven years and had just completed the contract of the management position I had dreamed of, back when things felt static years ago.
  
  The thing is, once you achieve your goals and your dreams, life tends to feel static again.
  
  The only place I knew I belonged, was abroad.
  
  Thanks for stopping by to read about my journey.
  
  I hope through this, you may feel inspired to chase your dreams, too.
  
  Lots of love,
  
  That girl solo backpacking.
  `;

function HomePage() {
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
    <div className="">
      <TransparentHeader />
      <div className="fixed -z-10 h-screen w-screen bg-[url('/images/pexels-roberto-nickson-2559941.jpg')] bg-center bg-no-repeat" />
      <div className="flex h-screen flex-col items-center justify-center bg-black bg-opacity-10">
        <h1 className="mx-auto text-center font-annieUseYourTelescope text-6xl tracking-wider text-white">
          That Girl Solo Backpacking
        </h1>

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
      </div>
    </div>
  );
}

export default HomePage;
