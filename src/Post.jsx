import ReactMarkdown from "react-markdown";
import { useParams } from "react-router-dom";
import postJson from "./posts.json";

function Post() {
  let params = useParams();
  let validId = params.id;

  console.log("Post.jsx: ", validId);

  let fetchedPost = {};

  postJson.forEach((post, i) => {
    if (validId == post.id) {
      fetchedPost.title = post.title ? post.title : "No title given";
      fetchedPost.date = post.date ? post.date : "No date given";
      fetchedPost.author = post.author ? post.author : "No author given";
      fetchedPost.content = post.content ? post.content : "No content given";
    }
  });

  console.log(fetchedPost);

  return (
    <div>
      <h2>{fetchedPost.title}</h2>
      <p>
        Published on {fetchedPost.date} by {fetchedPost.author}
      </p>
      <ReactMarkdown children={fetchedPost.content} />
    </div>
  );
}

export default Post;
