import { useEffect, useRef, useState } from "react";
import Globe from "react-globe.gl";
import * as THREE from "three";

export default function GlobeFun() {
  const [countries, setCountries] = useState({ features: [] });
  const [width, setWidth] = useState(window.innerWidth * 1.7);
  const [height, setHeight] = useState(window.innerHeight);
  const [scale, setScale] = useState(1.6);
  const globe_ref: any = useRef();

  useEffect(() => {
    if (globe_ref != null) {
      let control = globe_ref?.current?.controls();
      control.autoRotate = true;
      control.enableZoom = false;
      globe_ref.current.scene().scale.x = scale;
      globe_ref.current.scene().scale.y = scale;
      globe_ref.current.scene().scale.z = scale;
    }

    // control.enabled = false;
  }, [globe_ref, scale]);

  useEffect(() => {
    fetch("/custom.geo.json")
      .then((res) => res.json())
      .then(setCountries);

    window.addEventListener("resize", onWindowResize, false);
    if (window.innerWidth < 550) {
      setWidth(window.innerWidth * 1.9);
      setScale(1.3);
    } else {
      setWidth(window.innerWidth * 1.7);
      setScale(1.6);
    }

    return () => {
      window.removeEventListener("resize", onWindowResize);
    };
  }, []);

  //Globe Size and Position Change on window resize
  function onWindowResize() {
    if (window.innerWidth < 550) {
      setWidth(window.innerWidth * 1.9);
      setScale(1.3);
    } else {
      setWidth(window.innerWidth * 1.7);
      setScale(1.6);
    }
    setHeight(window.innerHeight);
  }

  //Arcs
  const arcsData = [
    {
      startLat: 29.378586,
      startLng: 47.990341,
      endLat: 31.5204,
      endLng: 74.3587,
      color: ["#2C649C", "red"],
    },

    {
      startLat: 29.378586,
      startLng: 47.990341,
      endLat: 36.966428,
      endLng: -95.844032,
      color: ["#2C649C", "red"],
    },
    {
      startLat: 36.966428,
      startLng: -95.844032,
      endLat: -27.0,
      endLng: 133.0,
      color: ["#2C649C", "red"],
    },

    {
      startLat: 31.5204,
      startLng: 74.3587,
      endLat: -27.0,
      endLng: 133.0,
      color: ["#2C649C", "red"],
    },

    {
      startLat: 31.5204,
      startLng: 74.3587,
      endLat: 35.0,
      endLng: 105.0,
      color: ["#2C649C", "red"],
    },
  ];

  const globeMaterial = new THREE.MeshPhongMaterial();
  globeMaterial.color = new THREE.Color("#112D53");

  return (
    <div className="overflow-hidden">
      <div className="absolute w-full h-full overflow-hidden block">
        <div className="relative h-full top-0 left-0 section_background">
          <div className="cursor-grab globe-angled  ">
            <Globe
              ref={globe_ref}
              backgroundColor="rgba(0,0,0,0)"
              width={width}
              height={height}
              hexPolygonsData={countries.features}
              hexPolygonResolution={3}
              hexPolygonMargin={0.7}
              hexPolygonUseDots={true}
              hexPolygonColor={() =>
                ["#2C649C", "#1D4974"][Math.round(Math.random() * 1)]
              }
              globeMaterial={globeMaterial}
              arcsData={arcsData}
              arcDashLength={() => 1}
              arcDashGap={() => 1}
              arcDashAnimateTime={() => Math.random() * 2500}
              arcColor={"color"}

              // backgroundColor="#"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
