import ReactMarkdown from "react-markdown";
import postJson from "../posts.json";
import { Link } from "react-router-dom";

function BlogMainPage() {
  let excerptNumWords = 35;

  const excerptList = postJson.map((post) => {
    return post.content.split(" ").slice(0, excerptNumWords).join(" ") + "...";
  });

  return (
    <div className="postlist">
      {postJson.map((post, i) => {
        return (
          <div key={i} className="post-card">
            <h2>
              <Link className="links" to={`/blog/${post.titleUrl}`}>
                {post.titleString}
              </Link>
            </h2>
            <p>
              Published on {post.date} by {post.author}
            </p>
            <hr />
            <ReactMarkdown children={excerptList[i]} />
            <p>
              <Link className="links" to={`/blog/${post.titleUrl}`}>
                Read more
              </Link>
            </p>
            <br />
            <br />
          </div>
        );
      })}
    </div>
  );
}

export default BlogMainPage;
