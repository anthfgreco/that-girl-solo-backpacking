import { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { useParams } from "react-router-dom";
import markdownComponents from "../MarkdownStyling";
import { FaArrowDown } from "react-icons/fa";

import postJson from "../posts.json";
import TransparentHeader from "../Headers/TransparentHeader";

function BlogPost() {
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

  let params = useParams();
  let userTitleUrl = params.titleUrl;

  // Fetch post from posts.json
  let fetchedPost = postJson.find(
    (element) => element.titleUrl == userTitleUrl
  );

  return (
    <div>
      <TransparentHeader />

      <div
        className="fixed -z-10 h-screen w-screen bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${"/images/" + fetchedPost.image})` }}
      ></div>
      <div className="flex h-screen flex-col items-center justify-center bg-black bg-opacity-25">
        <h1 className="mx-auto mb-4 text-center font-annieUseYourTelescope text-5xl tracking-wider text-white lg:mx-60">
          {fetchedPost.titleString}
        </h1>
        <p className="text-white">Posted on {fetchedPost.date}</p>
        <span
          className="absolute bottom-1 animate-bounce text-2xl text-white"
          style={{ opacity: arrowOpacity }}
        >
          <FaArrowDown />
        </span>
      </div>

      <article className="bg-white">
        <br />
        <ReactMarkdown
          children={fetchedPost.content}
          components={markdownComponents}
        />
      </article>
    </div>
  );
}

export default BlogPost;
