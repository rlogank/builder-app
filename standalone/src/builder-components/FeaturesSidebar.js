import { usePreview } from "../context/PreviewContext";

const FeaturesSidebar = () => {
  const preview = usePreview();
  const [features, setFeatures] = preview.features;
  const input =
    "bg-black transition px-3.5 py-2 flex items-center justify-center bg-opacity-10 rounded-lg hover:bg-opacity-20 hover:cursor-pointer focus:cursor-text";
  const button =
    "bg-black transition flex items-center justify-center bg-opacity-10 rounded-lg hover:bg-opacity-20 active:bg-opacity-30 w-full";
  return (
    <>
      <div className="bg-gray-200 h-full inline-flex flex-col">
        <h1 className="font-bold">Features</h1>
        Title
        <input
          type="text"
          value={features.title}
          onChange={(e) =>
            setFeatures((previous) => ({ ...previous, title: e.target.value }))
          }
        />
        Colored Title
        <input
          type="text"
          value={features.coloredTitle}
          onChange={(e) =>
            setFeatures((previous) => ({
              ...previous,
              coloredTitle: e.target.value,
            }))
          }
        />
        Body
        <input
          type="text"
          value={features.body}
          onChange={(e) =>
            setFeatures((previous) => ({ ...previous, body: e.target.value }))
          }
        />
        Features
        {features.feature.map((x, index) => {
          return (
            <input
              key={index}
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
          );
        })}
      </div>
    </>
  );
};

export default FeaturesSidebar;
