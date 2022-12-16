// Add custom Tailwind CSS styling to Markdown
const markdownComponents = {
  p: ({ children }) => (
    <p className="mb-6 text-2xl leading-relaxed">{children}</p>
  ),
  h2: ({ children }) => (
    <h2 className="mb-6 mt-9 text-3xl leading-relaxed">{children}</h2>
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

export default markdownComponents;
