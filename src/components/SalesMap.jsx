import React from "react";
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";

const geoUrl =
  "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json";

const markers = [
  { name: "İstanbul", coordinates: [28.9784, 41.0082], sales: 120 },
  { name: "Ankara", coordinates: [32.8597, 39.9334], sales: 90 },
  { name: "Berlin", coordinates: [13.405, 52.52], sales: 70 },
];

function SalesMap() {
  return (
    <div style={{ textAlign: "center", marginTop: 50 }}>
      <h3>Satış Haritası</h3>
      <ComposableMap projection="geoMercator" width={800} height={400}>
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill="#e0e0e0"
                stroke="#ffffff"
              />
            ))
          }
        </Geographies>
        {markers.map(({ name, coordinates, sales }) => (
          <Marker key={name} coordinates={coordinates}>
            <circle r={6} fill="#FF5722" stroke="#fff" strokeWidth={2} />
            <text
              textAnchor="middle"
              y={-12}
              style={{ fontSize: "10px", fontWeight: "bold" }}
            >
              {name} ({sales})
            </text>
          </Marker>
        ))}
      </ComposableMap>
    </div>
  );
}

export default SalesMap;
