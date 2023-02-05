import BlankLayout from "@/components/blankLayout";
import Head from "next/head";
import { getSortedPostsData } from "@/lib/posts";
import Link from "next/link";
import Date from "@/components/date";
import Image from "next/image";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Blog({ allPostsData }) {
  return (
    <BlankLayout>
      <Head>
        <title>Blog</title>
      </Head>

      <div>
        <h1 className="text-center text-xl">Latest Blog Posts</h1>

        <div className="flex flex-wrap justify-center">
          {allPostsData.map(({ id, date, title, image }) => (
            <div
              key={id}
              className="group relative m-6 h-80 w-full overflow-hidden rounded-md md:h-52 md:w-80"
            >
              <Link href={`/blog/${id}`}>
                <Image
                  src={"/images/" + image}
                  fill
                  alt=""
                  sizes="(max-width: 768px) 100vw, 360px"
                  className="object-cover duration-100 ease-in group-hover:scale-105"
                />
                <div className="relative flex h-full w-full flex-col justify-end bg-black bg-opacity-50 p-6 group-hover:bg-opacity-30 md:p-3">
                  <span className="mb-3 text-xl font-semibold text-white">
                    {title}
                  </span>

                  <span className="text-sm font-semibold text-gray-300">
                    <Date dateString={date} />
                  </span>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </BlankLayout>
  );
}
