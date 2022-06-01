import { usePreview } from "../context/PreviewContext";

const CtaSidebar = () => {
  const preview = usePreview();
  const [cta, setCta] = preview.cta;
  ç
  return (
    <>
      <div className="bg-gray-200 h-full inline-flex flex-col">
        <h1 className="font-bold">Cta</h1>
        Title
        <input
          type="text"
          value={cta.title}
          onChange={(e) =>
            setCta((previous) => ({ ...previous, title: e.target.value }))
          }
        />
        Colored Title
        <input
          type="text"
          value={cta.coloredTitle}
          onChange={(e) =>
            setCta((previous) => ({
              ...previous,
              coloredTitle: e.target.value,
            }))
          }
        />
        Body
        <input
          type="text"
          value={cta.body}
          onChange={(e) =>
            setCta((previous) => ({ ...previous, body: e.target.value }))
          }
        />
        Button
        <div className="flex gap-1">
          <input
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
    </>
  );
};

export default CtaSidebar;
