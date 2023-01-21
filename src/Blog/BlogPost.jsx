import ReactMarkdown from "react-markdown";
import { useParams } from "react-router-dom";
import markdownComponents from "../MarkdownStyling";
import postJson from "../posts.json";
import SolidHeader from "../Headers/SolidHeader";

function BlogPost() {
  let params = useParams();
  let userTitleUrl = params.titleUrl;

  // Fetch post from posts.json
  let fetchedPost = postJson.find(
    (element) => element.titleUrl == userTitleUrl
  );

  return (
    <div>
      <SolidHeader />

      <article>
        <h1 className="mx-10 mb-2 text-3xl lg:mx-auto lg:max-w-[650px]">
          {fetchedPost.titleString}
        </h1>
        <p className="mx-10 mb-12 lg:mx-auto lg:max-w-[650px]">
          Posted on {fetchedPost.date}
        </p>
        <ReactMarkdown
          children={fetchedPost.content}
          components={markdownComponents}
        />
      </article>
    </div>
  );
}

export default BlogPost;
