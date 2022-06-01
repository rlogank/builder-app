import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";
import { usePreview } from "../context/PreviewContext";

const FeaturesSidebar = () => {
  const preview = usePreview();
  const [features, setFeatures] = preview.features;
  const input =
    "bg-black transition w-full px-3.5 py-2 flex items-center justify-center bg-opacity-10 rounded-lg hover:bg-opacity-20 hover:cursor-pointer focus:cursor-text";
  return (
    <>
      <div className="bg-black bg-opacity-10 rounded-lg text-white inline-flex flex-col p-5 gap-5 overflow-hidden">
        <div className="flex justify-between items-center">
          <h1 className="font-bold text-2xl">Features</h1>
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
              value={features.title}
              onChange={(e) =>
                setFeatures((previous) => ({
                  ...previous,
                  title: e.target.value,
                }))
              }
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <p className="text-sm">Colored Title</p>
            <input
              className={input}
              type="text"
              value={features.coloredTitle}
              onChange={(e) =>
                setFeatures((previous) => ({
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
            value={features.body}
            onChange={(e) =>
              setFeatures((previous) => ({ ...previous, body: e.target.value }))
            }
          />
        </div>

        <div className="flex flex-col gap-2.5">
          <p className="text-sm">Features</p>
          {features.feature.map((x, index) => {
            return (
              <div key={index} className="flex gap-2.5">
                <input
                  className={input}
                  type="text"
                  value={features.feature[index].title}
                  onChange={(e) => {
                    setFeatures((prev) => {
                      const previous = { ...prev };
                      previous.feature[index].title = e.target.value;
                      return previous;
                    });
                  }}
                />
                <input
                  className={input}
                  type="text"
                  value={features.feature[index].body}
                  onChange={(e) => {
                    setFeatures((prev) => {
                      const previous = { ...prev };
                      previous.feature[index].body = e.target.value;
                      return previous;
                    });
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default FeaturesSidebar;
