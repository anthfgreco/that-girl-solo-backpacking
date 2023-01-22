import React from "react";

// Add custom Tailwind CSS styling to Markdown
const markdownComponents = {
  p: ({ children }) => (
    <p className="mx-5 mb-6 leading-relaxed tracking-normal lg:mx-auto lg:max-w-[650px]">
      {children}
    </p>
  ),
  h2: ({ children }) => (
    <h2 className="mx-5 mb-6 mt-9 text-2xl font-semibold leading-relaxed lg:mx-auto lg:max-w-[650px]">
      {children}
    </h2>
  ),
  ul: ({ children }) => (
    <ul className="mx-10 mb-6 list-disc space-y-2 leading-relaxed lg:mx-auto lg:max-w-[550px]">
      {children}
    </ul>
  ),
  ol: ({ children }) => (
    <ol className="mx-10 mb-6 list-decimal space-y-2 leading-relaxed lg:mx-auto lg:max-w-[550px]">
      {children}
    </ol>
  ),
};

export default markdownComponents;
