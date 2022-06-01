import {
  FaCheck,
  FaChevronDown,
  FaChevronLeft,
  FaChevronRight,
  FaChevronUp,
} from "react-icons/fa";
import { usePreview } from "../context/PreviewContext";

const ColorSidebar = () => {
  const preview = usePreview();
  const colors = preview.colors;
  const [gradient, setGradient] = preview.gradient;
  const [aosDir, setAosDir] = preview.aosDir;
  const [selectedColor, setSelectedColor] = preview.selectedColor;
  console.log(selectedColor?.gradient);
  console.log(gradient);
  return (
    <>
      <div className="p-5 bg-black bg-opacity-10 text-white rounded-lg flex flex-col gap-2.5 lg:gap-5 h-full">
        <h2 className="text-2xl font-bold">General</h2>
        <div className="flex flex-col gap-1.5">
          <p className="text-sm">{gradient ? "Gradient Color" : "Color"}</p>
          <div className="flex justify-evenly gap-2.5 sm:bg-black sm:bg-opacity-10 rounded-lg sm:p-5">
            {colors.map((c, val) => {
              return (
                <div
                  key={val}
                  onClick={() => {
                    console.log(c);
                    setSelectedColor(colors[val]);
                  }}
                  className={
                    gradient
                      ? `w-10 lg:w-10 aspect-square bg-gradient-to-tl ${c.gradient} rounded-full flex justify-center self-center cursor-pointer transition border-4 items-center`
                      : `w-10 lg:w-10 aspect-square ${c.tcode} rounded-full flex justify-center self-center cursor-pointer transition border-4 items-center`
                  }
                >
                  {c.tcode === selectedColor.tcode && (
                    <FaCheck className="text-xs sm:text-base flex self-center mt-0.5" />
                  )}
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex flex-col gap-1.5">
          <p className="text-sm">Gradient</p>
          <div className="flex justify-evenly gap-2.5">
            <button
              onClick={() => {
                setGradient(false);
              }}
              className={
                gradient
                  ? `w-1/2 bg-gradient-to-tl bg-black bg-opacity-10 p-2.5 rounded-lg`
                  : `w-1/2 ${selectedColor.tcode} p-2.5 rounded-lg`
              }
            >
              off
            </button>
            <button
              onClick={() => {
                setGradient(true);
              }}
              className={
                gradient
                  ? `w-1/2 bg-gradient-to-tl ${selectedColor.gradient} sm:bg-opacity-10 p-2.5 rounded-lg`
                  : `w-1/2 bg-black bg-opacity-10 p-2.5 rounded-lg`
              }
            >
              on
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-1.5">
          <p className="text-sm">Scroll Animation</p>
          <div className="flex justify-evenly gap-2.5 text-lg">
            <button
              onClick={() => {
                setAosDir("fade-up");
              }}
              className={
                aosDir !== "fade-up"
                  ? `w-1/2 bg-gradient-to-tl bg-black bg-opacity-10 p-2.5 rounded-lg flex items-center justify-center`
                  : `w-1/2 ${selectedColor.tcode} p-2.5 rounded-lg flex items-center justify-center`
              }
            >
              <FaChevronUp />
            </button>
            <button
              onClick={() => {
                setAosDir("fade-right");
              }}
              className={
                aosDir !== "fade-right"
                  ? `w-1/2 bg-gradient-to-tl bg-black bg-opacity-10 p-2.5 rounded-lg flex items-center justify-center`
                  : `w-1/2 ${selectedColor.tcode} p-2.5 rounded-lg flex items-center justify-center`
              }
            >
              <FaChevronRight />
            </button>
            <button
              onClick={() => {
                setAosDir("fade-down");
              }}
              className={
                aosDir !== "fade-down"
                  ? `w-1/2 bg-gradient-to-tl bg-black bg-opacity-10 p-2.5 rounded-lg flex items-center justify-center`
                  : `w-1/2 ${selectedColor.tcode} p-2.5 rounded-lg flex items-center justify-center`
              }
            >
              <FaChevronDown />
            </button>
            <button
              onClick={() => {
                setAosDir("fade-left");
              }}
              className={
                aosDir !== "fade-left"
                  ? `w-1/2 bg-gradient-to-tl bg-black bg-opacity-10 p-2.5 rounded-lg flex items-center justify-center`
                  : `w-1/2 ${selectedColor.tcode} p-2.5 rounded-lg flex items-center justify-center`
              }
            >
              <FaChevronLeft />
            </button>
            <button
              onClick={() => {
                setGradient(true);
              }}
              className="w-1/2 bg-black bg-opacity-10 p-2.5 rounded-lg justify-center items-center flex"
            >
              off
            </button>
          </div>
        </div>

        {/* DARK THEME UNDER CONSTRUCTION */}
        {/* <div className="flex flex-col gap-1.5">
          <p className="text-sm">Default Theme</p>
          <div className="flex justify-evenly gap-2.5 text-xl">
            <button
              onClick={() => {
                setGradient(false);
              }}
              className={
                gradient
                  ? `w-1/2 bg-gradient-to-tl bg-black bg-opacity-10 p-2.5 rounded-lg justify-center items-center flex`
                  : `w-1/2 ${selectedColor.tcode} p-2.5 rounded-lg justify-center items-center flex`
              }
            >
              <FaSun />
            </button>
            <button
              onClick={() => {
                setGradient(true);
              }}
              className="w-1/2 bg-black bg-opacity-10 p-2.5 rounded-lg justify-center items-center flex"
            >
              <FaMoon />
            </button>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default ColorSidebar;
