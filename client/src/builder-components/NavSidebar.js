import { usePreview } from "../context/PreviewContext";
import { IconPicker } from "react-fa-icon-picker";
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";

const NavSidebar = () => {
  const preview = usePreview();
  const [navbar, setNavbar] = preview.navbar;
  const icon = navbar.icon;
  console.log(icon);

  const input =
    "bg-black transition px-3.5 py-2 w-full flex items-center justify-center bg-opacity-10 rounded-lg hover:bg-opacity-20 hover:cursor-pointer focus:cursor-text";
  const button =
    "bg-black transition flex items-center justify-center bg-opacity-10 rounded-lg hover:bg-opacity-20 active:bg-opacity-30 w-full relative z-[9999]";
  return (
    <>
      <div className="bg-black transition p-5 bg-opacity-10 text-white rounded-lg h-full flex flex-col gap-5">
        <div className="flex justify-between items-center">
          <h1 className="font-bold text-2xl">Navbar</h1>
          <div className="flex items-center gap-2.5 text-xl">
            <FaChevronCircleLeft />
            <p className="text-sm">Variation 1</p>
            <FaChevronCircleRight />
          </div>
        </div>
        <div className="flex gap-2.5 items-center">
          <div className="flex flex-col gap-1.5 w-1/2">
            <div className="text-sm">Logo</div>
            <input
              className={input}
              type="text"
              value={navbar.logo}
              onChange={(e) =>
                setNavbar((previous) => ({ ...previous, logo: e.target.value }))
              }
            />
          </div>
          <div className="flex flex-col gap-1.5 w-1/2">
            <div className="text-sm">Icon</div>
            <div className={button}>
              <IconPicker
                containerStyles={{
                  padding: "15px",
                  background: "rgba(1,1,1,0.9)",
                  border: "0",
                  color: "#FFF",
                  position: "absolute",
                  left: "-120px",
                  width: "287px",
                }}
                buttonStyles={{
                  color: "#FFF",
                  border: "none",
                }}
                buttonIconStyles={{
                  color: "#FFF",
                  border: "none",
                }}
                pickerIconStyles={{
                  color: "#FFF",
                  padding: "5px",
                }}
                searchInputStyles={{
                  marginBottom: "15px",
                  padding: "5px 10px",
                  background: "transparent",
                  borderBottom: "2px solid #888",
                  outline: "0",
                }}
                value={icon}
                onChange={(e) =>
                  setNavbar((previous) => ({ ...previous, icon: e }))
                }
              />
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col gap-1.5">
          <div className="text-sm">Links</div>
          <div className="flex flex-col gap-2.5">
            {navbar.links.map((x, index) => {
              return (
                <div key={index} className="flex gap-2.5">
                  <input
                    className={input}
                    type="text"
                    value={navbar.links[index].text}
                    onChange={(e) => {
                      setNavbar((prev) => {
                        const previous = { ...prev };
                        previous.links[index].text = e.target.value;
                        return previous;
                      });
                    }}
                  />
                  <input
                    className={input}
                    type="text"
                    value={navbar.links[index].link}
                    onChange={(e) => {
                      setNavbar((prev) => {
                        const previous = { ...prev };
                        previous.links[index].link = e.target.value;
                        return previous;
                      });
                    }}
                  />
                </div>
              );
            })}
            <div className="flex gap-2.5">
              <input
                className={input}
                type="text"
                value={navbar.buttonTitle}
                onChange={(e) => {
                  setNavbar((previous) => ({
                    ...previous,
                    buttonTitle: e.target.value,
                  }));
                }}
              />
              <input
                className={input}
                type="text"
                value={navbar.buttonLink}
                onChange={(e) => {
                  setNavbar((previous) => ({
                    ...previous,
                    buttonLink: e.target.value,
                  }));
                }}
              />
            </div>{" "}
          </div>
        </div>
      </div>
    </>
  );
};

export default NavSidebar;
