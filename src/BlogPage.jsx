import ReactMarkdown from "react-markdown";

const blogPosts = [
  {
    id: 1,
    title: "My first blog post",
    body: "This is the body of my first blog post.",
  },
  {
    id: 2,
    title: "My second blog post",
    body: "This is the body of my second blog post.",
  },
];

// Add custom Tailwind CSS styling to Markdown
const markdownComponents = {
  p: ({ children }) => <p className="mb-4">{children}</p>,
};

const markdown = `
  ## Testing

  This is a paragraph

  This is also a paragraph
  `;

function BlogPage() {
  return (
    <div>
      <ReactMarkdown children={markdown} components={markdownComponents} />
    </div>
  );
}

export default BlogPage;
