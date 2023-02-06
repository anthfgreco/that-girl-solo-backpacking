import BlankLayout from "@/components/blankLayout";
import Head from "next/head";
import Map from "@/components/map";

export async function getStaticProps() {
  const TopoJSON =
    "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries-sans-antarctica.json";

  return {
    props: {
      TopoJSON,
    },
  };
}

export default function Destinations({ TopoJSON }) {
  return (
    <BlankLayout>
      <Head>
        <title>Destinations</title>
      </Head>

      <Map TopoJSON={TopoJSON} widthClass={"w-full"} />
    </BlankLayout>
  );
}
