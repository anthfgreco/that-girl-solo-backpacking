import postJson from "../posts.json";
import { Link } from "react-router-dom";
import SolidHeader from "../Headers/SolidHeader";

function BlogMainPage() {
  /*
  let excerptNumWords = 40;
  const excerptList = postJson.map((post) => {
    return post.content.split(" ").slice(0, excerptNumWords).join(" ") + "...";
  });
  */

  return (
    <div>
      <SolidHeader />

      <div className="flex flex-col items-center justify-center">
        <h1 className="text-3xl font-black text-black">Latest Blog Posts</h1>

        <div className="flex flex-wrap justify-center">
          {postJson.map((post, i) => {
            return (
              <div key={i} className="m-4 flex w-64 flex-col items-center">
                <Link to={`/blog/${post.titleUrl}`} className="overflow-hidden">
                  <img
                    src={"images/" + post.image}
                    alt="Blog image"
                    className="h-52 w-full object-contain"
                  />
                </Link>
                <Link to={`/blog/${post.titleUrl}`} className="mb-2">
                  <h3 className="text-center text-xl">{post.titleString}</h3>
                </Link>
                <Link
                  to={`/blog/${post.titleUrl}`}
                  className="bg-violet-500 px-4 py-1 text-white"
                >
                  View Post
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default BlogMainPage;
