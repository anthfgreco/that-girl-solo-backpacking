import { useParams } from "react-router-dom";

import postJson from "../posts.json";
import PageTemplate from "../PageTemplate";

function BlogPost() {
  let params = useParams();
  let userTitleUrl = params.titleUrl;

  let fetchedPost = postJson.find(
    (element) => element.titleUrl == userTitleUrl
  );

  return (
    <div>
      <PageTemplate
        backgroundImageURL={"url(images/" + fetchedPost.image}
        title={fetchedPost.titleString}
        date={"Posted on " + fetchedPost.date}
        markdown={fetchedPost.content}
      />
    </div>
  );
}

export default BlogPost;
