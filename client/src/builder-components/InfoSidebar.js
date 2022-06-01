import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";
import { usePreview } from "../context/PreviewContext";

const InfoSidebar = () => {
  const preview = usePreview();
  const [info, setInfo] = preview.info;
  const input =
    "bg-black transition w-full px-3.5 py-2 flex items-center justify-center bg-opacity-10 rounded-lg hover:bg-opacity-20 hover:cursor-pointer focus:cursor-text";
  const button =
    "bg-black transition flex items-center justify-center bg-opacity-10 rounded-lg hover:bg-opacity-20 active:bg-opacity-30 w-full";
  return (
    <>
      <div className=" inline-flex flex-col gap-5 p-5 rounded-lg bg-black bg-opacity-10 text-white">
        <div className="flex justify-between items-center">
          <h1 className="font-bold text-2xl">Info</h1>
          <div className="flex items-center gap-2.5 text-xl">
            <FaChevronCircleLeft />
            <p className="text-sm">Variation 1</p>
            <FaChevronCircleRight />
          </div>
        </div>
        <div className="flex gap-2.5">
          <div className="flex flex-col gap-1.5">
            <p className="text-sm">Title</p>
            <input
              className={input}
              type="text"
              value={info.title}
              onChange={(e) =>
                setInfo((previous) => ({ ...previous, title: e.target.value }))
              }
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <p className="text-sm">Colored Title</p>
            <input
              className={input}
              type="text"
              value={info.coloredTitle}
              onChange={(e) =>
                setInfo((previous) => ({
                  ...previous,
                  coloredTitle: e.target.value,
                }))
              }
            />
          </div>
        </div>
        <div className="flex flex-col gap-1.5">
          <p className="text-sm">Body</p>
          <input
            className={input}
            type="text"
            value={info.body}
            onChange={(e) =>
              setInfo((previous) => ({ ...previous, body: e.target.value }))
            }
          />
        </div>
      </div>
    </>
  );
};

export default InfoSidebar;
