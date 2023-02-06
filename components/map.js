import { useEffect, useState } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";

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

export default function Map({ TopoJSON, widthClass }) {
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
    <div className={widthClass}>
      <p
        className="fixed select-none rounded-lg border-[2px] border-black bg-white px-2 text-sm font-semibold text-black"
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
        projectionConfig={{
          scale: 120,
        }}
        height={700}
      >
        <Geographies geography={TopoJSON}>
          {({ geographies }) =>
            geographies.map((geo) => {
              const country = geo.properties.name;
              const fillColor = visitedCountries.has(country)
                ? "#8B5CF6"
                : "#dbdbdb";

              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill={fillColor}
                  stroke="#adadad"
                  strokeWidth="0.5"
                  onMouseEnter={() => {
                    setTooltipContent(country);
                  }}
                  onMouseLeave={() => {
                    setTooltipContent("");
                  }}
                  // Get rid of bounding box when you click country
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
