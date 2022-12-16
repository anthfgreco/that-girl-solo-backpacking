import ReactMarkdown from "react-markdown";
import postJson from "./posts.json";
import { Link } from "react-router-dom";

// Add custom Tailwind CSS styling to Markdown
const markdownComponents = {
  p: ({ children }) => (
    <p className="mb-6 text-2xl leading-relaxed">{children}</p>
  ),
  h2: ({ children }) => (
    <h2 className="mb-6 mt-9 text-4xl leading-relaxed">{children}</h2>
  ),
  ul: ({ children }) => (
    <ul className="ml-4 list-disc text-2xl leading-relaxed md:ml-0">
      {children}
    </ul>
  ),
  ol: ({ children }) => (
    <ol className="ml-4 list-decimal text-2xl leading-relaxed md:ml-0">
      {children}
    </ol>
  ),
};

function BlogPage() {
  const excerptList = postJson.map((post) => {
    return post.content.split(" ").slice(0, 20).join(" ") + "...";
  });

  return (
    <div className="postlist">
      {postJson.map((post, i) => {
        return (
          <div key={i} className="post-card">
            <h2>
              <Link className="links" to={`/blog/${post.id}`}>
                {post.title}
              </Link>
            </h2>
            <p>
              Published on {post.date} by {post.author}
            </p>
            <hr />
            <ReactMarkdown children={excerptList[i]} />
            <p>
              <Link className="links" to={`/blog/${post.id}`}>
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

export default BlogPage;
