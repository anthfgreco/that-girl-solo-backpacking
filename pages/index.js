import Head from "next/head";
import FullImageLayout from "@/components/fullImageLayout";
import { getSortedPostsData } from "@/lib/posts";
import Link from "next/link";
import Date from "@/components/date";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <FullImageLayout>
      <Head>
        <title>That Girl Solo Backpacking</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div>
        <section></section>
      </div>
    </FullImageLayout>
  );
}
