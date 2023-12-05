import { useEffect, useState } from "react";
import Globe from "react-globe.gl";
import * as THREE from "three";

export default function GlobeFun() {
  const [countries, setCountries] = useState({ features: [] });
  useEffect(() => {
    fetch("/custom.geo.json")
      .then((res) => res.json())
      .then(setCountries);
  }, []);

  // const N = 20;

  const arcsData = [
    {
      startLat: 29.378586,
      startLng: 47.990341,
      endLat: 31.5204,
      endLng: 74.3587,
      color: ["#2C649C", "#0F274A"],
    },
  ];

  // const arcsData = [...Array(N).keys()].map(() => ({
  //   startLat: (Math.random() - 0.5) * 180,
  //   startLng: (Math.random() - 0.5) * 360,
  //   endLat: (Math.random() - 0.5) * 180,
  //   endLng: (Math.random() - 0.5) * 360,
  //   color: [
  //     ["red", "white", "blue", "green"][Math.round(Math.random() * 3)],
  //     ["red", "white", "blue", "green"][Math.round(Math.random() * 3)],
  //   ],
  // }));

  const globeMaterial = new THREE.MeshPhongMaterial();
  globeMaterial.color = new THREE.Color("#0F274A");

  return (
    <>
      <Globe
        hexPolygonsData={countries.features}
        hexPolygonResolution={3}
        hexPolygonMargin={0.7}
        hexPolygonUseDots={true}
        hexPolygonColor={() => "#2C649C"}
        globeMaterial={globeMaterial}
        arcsData={arcsData}
        arcDashLength={() => 0.6}
        arcDashGap={() => 0.1}
        arcDashAnimateTime={() => Math.random() * 5500}

        // backgroundColor="#"
      />
    </>
  );
}
