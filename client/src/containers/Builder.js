import NavSidebar from "../builder-components/NavSidebar";
import HeroSidebar from "../builder-components/HeroSidebar";
import FeaturesSidebar from "../builder-components/FeaturesSidebar";
import InfoSidebar from "../builder-components/InfoSidebar";
import CtaSidebar from "../builder-components/CtaSidebar";
import { usePreview } from "../context/PreviewContext";
import ColorSidebar from "../builder-components/ColorSidebar";
import { FaEye, FaHammer } from "react-icons/fa";

const Builder = ({ setShow }) => {
  const preview = usePreview();
  const selectedColor = preview.selectedColor;
  const gradient = preview.gradient;
  const [tab, setTab] = preview.tab;
  function prepareState(preview) {
    const objToReturn = {};
    for (const key in preview) {
      objToReturn[key] = preview[key][0];
    }
    return objToReturn;
  }

  const sections = [
    { name: "General" },
    { name: "Navbar" },
    { name: "Hero" },
    { name: "Features" },
    { name: "Info" },
    { name: "Call to Action" },
  ];

  const runBuild = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:666/api/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(prepareState(preview)),
      });
      const id = await response.text();
      window.open("http://localhost:666/" + id + ".zip", "_blank").focus();
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div
      className={`bg-slate-600 drop-shadow-xl h-screen z-10 relative w-full transition flex flex-col pt-[80px]`}
    >
      <div className="mt-5 mx-5 bg-black text-white rounded-lg px-4 py-2.5 bg-opacity-10">
        Welcome to Builder App. To get started, simply select a section, make
        your changes, and click build.
      </div>
      <div className="px-5 flex flex-wrap gap-2.5 mt-5">
        {sections.map((s) => {
          return (
            <button
              onClick={() => {
                setTab(s.name);
              }}
              className={
                s.name === tab
                  ? "px-3.5 py-2 text-white bg-black bg-opacity-30 rounded-lg hover:bg-opacity-20 active:bg-opacity-30 transition"
                  : "px-3.5 py-2 text-white bg-black bg-opacity-10 rounded-lg hover:bg-opacity-20 active:bg-opacity-30 transition"
              }
            >
              {s.name}
            </button>
          );
        })}
      </div>
      <div className="bg-black  bg-opacity-10 absolute top-0 w-full flex justify-between p-5">
        <div className="flex items-center justify-end gap-2.5 text-2xl font-extrabold tracking-tight text-white">
          Builder App
        </div>
        <div className="flex items-center justify-end gap-2.5">
          <button
            onClick={() => {
              setShow(false);
            }}
            className="bg-black text-white bg-opacity-10 hover:bg-opacity-20 active:bg-opacity-30 transition px-3.5 py-2 rounded-lg flex items-center gap-1.5 justify-center"
          >
            <FaEye className="text-sm" /> Preview
          </button>
          <button
            onClick={runBuild}
            className={
              gradient[0]
                ? `bg-gradient-to-tl flex items-center gap-1.5 ${selectedColor[0]?.gradient} hover:-hue-rotate-30 active:scale-[95%] text-white px-3.5 py-2 text-base font-medium rounded-lg transition`
                : `${selectedColor[0]?.tcode} text-white flex items-center gap-1.5 px-3.5 py-2 text-base font-medium  ${selectedColor[0]?.tcodeHover} ${selectedColor[0]?.tcodeActive} rounded-lg transition`
            }
          >
            <FaHammer className="text-sm" /> Build
          </button>
          {/* <button className="text-white text-xl h-[40px] aspect-square rounded-lg flex items-center gap-1.5 justify-center bg-opacity-0 hover:bg-opacity-10 active:bg-opacity-20 bg-black transition">
            <FaTimes />
          </button> */}
        </div>
      </div>
      <div className=" p-2.5 lg:p-5  items-center justify-between mx-auto gap-2.5 lg:gap-10">
        {tab === "General" && <ColorSidebar />}
        {tab === "Navbar" && <NavSidebar />}
        {tab === "Hero" && <HeroSidebar />}
        {tab === "Features" && <FeaturesSidebar />}
        {tab === "Info" && <InfoSidebar />}
        {tab === "Call to Action" && <CtaSidebar />}
      </div>
    </div>
  );
};

export default Builder;
