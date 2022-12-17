import ReactMarkdown from "react-markdown";
import postJson from "../posts.json";
import { Link } from "react-router-dom";
import markdownComponents from "../MarkdownStyling";

function BlogMainPage() {
  let excerptNumWords = 40;

  const excerptList = postJson.map((post) => {
    return post.content.split(" ").slice(0, excerptNumWords).join(" ") + "...";
  });

  return (
    <div className="postlist">
      {postJson.map((post, i) => {
        return (
          <div key={i} className="post-card">
            <h2 className="mb-1 text-3xl">
              <Link className="links" to={`/blog/${post.titleUrl}`}>
                {post.titleString}
              </Link>
            </h2>
            <p>
              Published on {post.date} {/*by {post.author}*/}
            </p>
            <hr />
            <ReactMarkdown children={excerptList[i]} className="mb-2" />
            <button className="border p-1 hover:border-purple-900">
              <Link className="links" to={`/blog/${post.titleUrl}`}>
                Read more
              </Link>
            </button>
            <br />
            <br />
          </div>
        );
      })}
    </div>
  );
}

export default BlogMainPage;
