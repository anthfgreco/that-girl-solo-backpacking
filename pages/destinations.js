import BlankLayout from "@/components/blankLayout";
import Head from "next/head";
import Map from "@/components/map";

export default function Destinations() {
  return (
    <BlankLayout>
      <Head>
        <title>Destinations</title>
      </Head>

      <Map widthClass={"w-full"} />
    </BlankLayout>
  );
}
