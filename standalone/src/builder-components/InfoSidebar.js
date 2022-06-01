import { usePreview } from "../context/PreviewContext";

const InfoSidebar = () => {
  const preview = usePreview();
  const [info, setInfo] = preview.info;
  const input = "bg-black transition px-3.5 py-2 flex items-center justify-center bg-opacity-10 rounded-lg hover:bg-opacity-20 hover:cursor-pointer focus:cursor-text"
  const button = "bg-black transition flex items-center justify-center bg-opacity-10 rounded-lg hover:bg-opacity-20 active:bg-opacity-30 w-full"
  return (
    <>
      <div className="bg-gray-200 h-full inline-flex flex-col">
        <h1 className="font-bold">Info</h1>
        Title
        <input
          type="text"
          value={info.title}
          onChange={(e) =>
            setInfo((previous) => ({ ...previous, title: e.target.value }))
          }
        />
        Colored Title
        <input
          type="text"
          value={info.coloredTitle}
          onChange={(e) =>
            setInfo((previous) => ({
              ...previous,
              coloredTitle: e.target.value,
            }))
          }
        />
        Body
        <input
          type="text"
          value={info.body}
          onChange={(e) =>
            setInfo((previous) => ({ ...previous, body: e.target.value }))
          }
        />
      </div>
    </>
  );
};

export default InfoSidebar;
