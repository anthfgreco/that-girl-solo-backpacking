import ReactMarkdown from "react-markdown";
import { useParams } from "react-router-dom";
import markdownComponents from "./MarkdownStyling";
import postJson from "./posts.json";

function Post() {
  let params = useParams();
  let userTitleUrl = params.titleUrl;

  let fetchedPost = {};

  postJson.forEach((post, i) => {
    if (userTitleUrl == post.titleUrl) {
      fetchedPost.titleString = post.titleString
        ? post.titleString
        : "No title given";
      fetchedPost.date = post.date ? post.date : "No date given";
      fetchedPost.author = post.author ? post.author : "No author given";
      fetchedPost.content = post.content ? post.content : "No content given";
    }
  });

  return (
    <div>
      <h1 className="mb-2 text-4xl text-black">{fetchedPost.titleString}</h1>
      <p className="mb-12">
        Published on {fetchedPost.date} by {fetchedPost.author}
      </p>
      <ReactMarkdown
        children={fetchedPost.content}
        components={markdownComponents}
      />
    </div>
  );
}

export default Post;
