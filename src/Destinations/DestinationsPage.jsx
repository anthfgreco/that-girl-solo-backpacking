import { useEffect, useState } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";

import SolidHeader from "../Headers/SolidHeader";

const geoUrl =
  "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries-sans-antarctica.json";

const visitedCountries = new Set([
  "United States of America",
  "Canada",
  "Thailand",
  "Vietnam",
  "Cambodia",
  "Australia",
  "Ireland",
  "United Kingdom",
  "Netherlands",
  "Germany",
  "Italy",
  "Spain",
  "Portugal",
  "Croatia",
  "Austria",
  "Hungary",
  "Czech Republic",
  "Denmark",
  "France",
]);

function DestinationsPage() {
  const [tooltipContent, setTooltipContent] = useState("");
  const [mousePosition, setMousePosition] = useState({ x: null, y: null });

  useEffect(() => {
    window.addEventListener("mousemove", updateMousePosition);
    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  function updateMousePosition(ev) {
    //console.log(`Mouse position: ${ev.clientX}, ${ev.clientY}`);
    setMousePosition({ x: ev.clientX, y: ev.clientY });
  }

  return (
    <div>
      <SolidHeader />

      <p
        className="pointer-events-none fixed rounded-lg border-2 border-black bg-white px-2 pt-1 text-sm font-bold text-black"
        style={{
          left: mousePosition.x,
          top: mousePosition.y - 30,
          display: tooltipContent ? "block" : "none", // Avoids empty floating tooltip
        }}
      >
        {tooltipContent}
      </p>

      <ComposableMap
        projection="geoMercator"
        style={{ width: "100%", height: "100%" }}
        projectionConfig={{
          scale: 120,
        }}
        height={700}
      >
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => {
              const country = geo.properties.name;
              const fillColor = visitedCountries.has(country)
                ? "rgb(139, 92, 246)"
                : "#dbdbdb";
              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill={fillColor}
                  stroke="#adadad"
                  strokeWidth="0.5"
                  onTouchStart={() => {
                    console.log(country);
                    setTooltipContent(country);
                  }}
                  onMouseEnter={() => {
                    console.log(country);
                    setTooltipContent(country);
                  }}
                  onMouseLeave={() => {
                    setTooltipContent("");
                  }}
                  style={{
                    default: { outline: "none" },
                    hover: { outline: "none" },
                    pressed: { outline: "none" },
                  }}
                />
              );
            })
          }
        </Geographies>
      </ComposableMap>
    </div>
  );
}

export default DestinationsPage;

// https://simplemaps.com/custom/world/3tNfIb2j
