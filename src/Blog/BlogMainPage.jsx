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
    <div className="post-list">
      {postJson.map((post, i) => {
        return (
          <div
            key={i}
            className="mx-auto mb-6 rounded-lg border px-8 py-4 shadow dark:bg-gray-800"
          >
            <div className="flex items-center justify-between">
              <span className="text-sm font-light text-gray-600 dark:text-gray-400">
                {post.date}
              </span>
              {/*
              <a className="transform cursor-pointer rounded bg-gray-600 px-3 py-1 text-sm font-bold text-gray-100 transition-colors duration-200 hover:bg-gray-500">
                JavaScript
              </a>
              */}
            </div>
            <div className="mt-2">
              <h2 className="text-2xl font-bold text-gray-700 hover:text-gray-600 hover:underline dark:text-white dark:hover:text-gray-200">
                <Link className="links" to={`/blog/${post.titleUrl}`}>
                  {post.titleString}
                </Link>
              </h2>
              <ReactMarkdown
                children={excerptList[i]}
                className="mt-2 text-gray-600 dark:text-gray-300"
              />
            </div>
            <div className="mt-4 flex items-center justify-between">
              <Link
                className="text-blue-600 hover:underline dark:text-blue-400"
                to={`/blog/${post.titleUrl}`}
              >
                Read more ⟶
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default BlogMainPage;
