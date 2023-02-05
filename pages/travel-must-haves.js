import BlankLayout from "@/components/blankLayout";
import Head from "next/head";

const itemList = [
  "Back-up battery pack",
  "Micro fiber Towel",
  "Bum bag",
  "Waterproof phone case",
  "Tripod",
  "Bluetooth shutter button",
  "Refillable water bottle (with a clip)",
  "Travel adapter",
  "Packing cubes",
  "Locker lock",
];

const linkList = [
  [
    "99 Travel Journal Prompts For The Wanderers, The Adventurers, The Dreamers",
    "https://www.amazon.ca/dp/B0BR9M7LXJ",
  ],
  [
    "My Travel Bestie Spotify Playlist",
    "https://open.spotify.com/user/22pepgpr7ea5fux2n6tpr3dnq?si=43ae3b40d2964cfd",
  ],
];

export default function TravelMustHaves() {
  return (
    <BlankLayout column>
      <Head>
        <title>Travel Must Haves</title>
      </Head>

      <div>
        <ol className="mx-10 list-decimal space-y-2">
          {linkList.map(([name, url]) => (
            <li key={name}>
              <a
                href={url}
                target="_blank"
                className="text-violet-500 hover:text-violet-800"
                rel="noreferrer"
              >
                {name}
              </a>
            </li>
          ))}

          {itemList.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ol>
      </div>
    </BlankLayout>
  );
}
