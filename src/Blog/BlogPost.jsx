import ReactMarkdown from "react-markdown";
import { useParams } from "react-router-dom";
import markdownComponents from "../MarkdownStyling";
import postJson from "../posts.json";

function BlogPost() {
  let params = useParams();
  let userTitleUrl = params.titleUrl;

  // Fetch post from posts.json
  let fetchedPost = postJson.find(
    (element) => element.titleUrl == userTitleUrl
  );

  return (
    <article>
      <h1 className="mb-2 text-4xl">{fetchedPost.titleString}</h1>
      <p className="mb-12">Posted on {fetchedPost.date}</p>
      <ReactMarkdown
        children={fetchedPost.content}
        components={markdownComponents}
      />
    </article>
  );
}

export default BlogPost;
