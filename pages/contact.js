import BlankLayout from "@/components/blankLayout";
import Head from "next/head";
import markdownStyles from "@/styles/markdown.module.css";

export default function Contact() {
  return (
    <BlankLayout column>
      <Head>
        <title>Contact</title>
      </Head>

      <div className={markdownStyles.markdown}>
        <p>
          Hi besties! Solo travelling can feel overwhelming-- meet with me for a
          1-on-1 touchpoint, where you’ll have the ability to ask questions,
          gather insight and seek inspiration, confidence and reassurance, as
          you manifest your next adventure:{" "}
          <a
            href="https://squareup.com/appointments/book/a4t5ys099vkzqp/LNR5VWTK3X6QR/services"
            target="_blank"
            rel="noreferrer"
            className="text-violet-500 hover:text-violet-800"
          >
            Solo Travel Besties 1-on-1 Travel Life Coaching
          </a>
          .
        </p>

        <p>
          Alternatively, email me at{" "}
          <a
            href="mailto:thatgirlsolobackpacking@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="text-violet-500 hover:text-violet-800"
          >
            thatgirlsolobackpacking@gmail.com
          </a>{" "}
          or use the form below.
        </p>
      </div>
    </BlankLayout>
  );
}
