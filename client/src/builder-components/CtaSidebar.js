import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";
import { usePreview } from "../context/PreviewContext";

const CtaSidebar = () => {
  const preview = usePreview();
  const [cta, setCta] = preview.cta;
  const input =
    "bg-black w-full transition px-3.5 py-2 flex items-center justify-center bg-opacity-10 rounded-lg hover:bg-opacity-20 hover:cursor-pointer focus:cursor-text";
  const button =
    "bg-black transition flex items-center justify-center bg-opacity-10 rounded-lg hover:bg-opacity-20 active:bg-opacity-30 w-full";
  return (
    <>
      <div className="bg-black bg-opacity-10 rounded-lg p-5 text-white inline-flex flex-col gap-5 h-[352px]">
        <div className="flex justify-between items-center">
          <h1 className="font-bold text-2xl">CTA</h1>
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
              value={cta.title}
              onChange={(e) =>
                setCta((previous) => ({ ...previous, title: e.target.value }))
              }
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <p className="text-sm">Colored Title</p>
            <input
              className={input}
              type="text"
              value={cta.coloredTitle}
              onChange={(e) =>
                setCta((previous) => ({
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
            value={cta.body}
            onChange={(e) =>
              setCta((previous) => ({ ...previous, body: e.target.value }))
            }
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <p className="text-sm">Button</p>
          <div className="flex gap-2.5">
            <input
              className={input}
              type="text"
              value={cta.buttonTitle}
              onChange={(e) =>
                setCta((previous) => ({
                  ...previous,
                  buttonTitle: e.target.value,
                }))
              }
            />
            <input
              className={input}
              type="text"
              value={cta.buttonLink}
              onChange={(e) =>
                setCta((previous) => ({
                  ...previous,
                  buttonLink: e.target.value,
                }))
              }
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default CtaSidebar;
