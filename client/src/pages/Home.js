import Preview from "../containers/Preview";
import Builder from "../containers/Builder";
import { useState } from "react";
import { FaChevronRight } from "react-icons/fa";

const Home = () => {
  const [show, setShow] = useState(true);
  return (
    <div className="flex">
      <div
        onClick={() => {
          setShow(true);
        }}
        className="bg-slate-700 bg-opacity-20 hover:bg-opacity-80 text-white cursor-pointer transition active:bg-slate-800 h-screen w-10 fixed flex items-center justify-center"
      >
        <FaChevronRight />
      </div>
      <div
        className={
          show
            ? "w-full lg:pl-[510px] h-screen md:h-auto overflow-hidden"
            : "w-full lg:pr-0 overflow-hidden"
        }
      >
        <Preview />
      </div>
      <div className="w-full sm:w-[510px] fixed z-10 shadow-xl">
        {show && <Builder setShow={setShow} />}
      </div>
    </div>
  );
};

export default Home;
