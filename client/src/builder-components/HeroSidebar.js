import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";
import { usePreview } from "../context/PreviewContext";

const HeroSidebar = () => {
  const preview = usePreview();
  const [hero, setHero] = preview.hero;

  const input =
    "bg-black transition w-full px-3.5 py-2 flex items-center justify-center bg-opacity-10 rounded-lg hover:bg-opacity-20 hover:cursor-pointer focus:cursor-text";

  const button =
    "bg-black transition flex items-center justify-center bg-opacity-10 rounded-lg hover:bg-opacity-20 active:bg-opacity-30 w-full";

  return (
    <>
      <div className="bg-black text-white bg-opacity-10 rounded-lg p-5 h-full inline-flex flex-col gap-5">
        <div className="flex justify-between items-center">
          <h1 className="font-bold text-2xl">Hero</h1>
          <div className="flex items-center gap-2.5 text-xl">
            <FaChevronCircleLeft />
            <p className="text-sm">Variation 1</p>
            <FaChevronCircleRight />
          </div>
        </div>
        <div className="flex gap-2.5">
          <div className="flex flex-col gap-1.5">
            <div className="text-sm">Title</div>
            <input
              className={input}
              type="text"
              value={hero.title}
              onChange={(e) =>
                setHero((previous) => ({ ...previous, title: e.target.value }))
              }
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <div className="text-sm">Colored Title</div>
            <input
              className={input}
              type="text"
              value={hero.coloredTitle}
              onChange={(e) =>
                setHero((previous) => ({
                  ...previous,
                  coloredTitle: e.target.value,
                }))
              }
            />
          </div>
        </div>
        <div className="flex flex-col gap-1.5">
          <div className="text-sm">Body</div>
          <input
            className={input}
            type="text"
            value={hero.body}
            onChange={(e) =>
              setHero((previous) => ({ ...previous, body: e.target.value }))
            }
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <div className="text-sm">Button</div>
          <div className="flex gap-2.5">
            <input
              className={input}
              type="text"
              value={hero.buttonText}
              onChange={(e) =>
                setHero((previous) => ({
                  ...previous,
                  buttonText: e.target.value,
                }))
              }
            />
            <input
              className={input}
              type="text"
              value={hero.buttonLink}
              onChange={(e) =>
                setHero((previous) => ({
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

export default HeroSidebar;
