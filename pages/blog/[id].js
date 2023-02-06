import FullImageLayout from "@/components/fullImageLayout";
import { getAllPostIds, getPostData } from "@/lib/posts";
import Head from "next/head";
import Date from "@/components/date";
import markdownStyles from "@/styles/markdown.module.css";

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

export default function Post({ postData }) {
  const { title, date, image, id, contentHtml } = postData;

  return (
    <FullImageLayout imageURL={image} title={title} date={date} column>
      <Head>
        <title>{title}</title>
      </Head>

      <article>
        <div
          dangerouslySetInnerHTML={{ __html: contentHtml }}
          className={markdownStyles.markdown}
        />
      </article>
    </FullImageLayout>
  );
}
