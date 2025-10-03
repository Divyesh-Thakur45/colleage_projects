import { useEffect, useState } from "react";
import axios from "axios";
import ColorChanger from "../ui/ColorChanger";
import { LeftSideBar } from "../ui/LeftSideBar";

export const ScreenGlasses = () => {
  const [productFilter, setproductFilter] = useState(null);
  const [brand, setbrand] = useState(null);
  const [ScreenGlassesData, setScreenGlassesData] = useState([]);

  console.log(
    "🚀 ~ screen-glasses.jsx:11 ~ ScreenGlasses ~ ScreenGlassesData:",
    ScreenGlassesData
  );

  useEffect(() => {
    axios
      .get(`https://all-json-server-osax.onrender.com/ScreenGlasses`)
      .then((res) => setScreenGlassesData(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      {/* Banner image */}
      <img
        src="https://static5.lenskart.com/media/uploads/plp-free-lenses-desk.png"
        alt=""
      />

      {/* ScreenGlassesSection */}
      <div className="w-full flex">
        {/* Left Sidebar */}
        <>
          <LeftSideBar />
        </>

        {/* Right Grid */}
        <div className="w-4/5 grid grid-cols-3">
          {ScreenGlassesData.map((obj, idx) => {
            return <ColorChanger key={idx} obj={obj} />;
          })}
        </div>
      </div>
    </div>
  );
};
