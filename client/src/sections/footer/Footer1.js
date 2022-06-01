import { Link } from "react-router-dom";
import { usePreview } from "../../context/PreviewContext";
import { IconPickerItem } from "react-fa-icon-picker";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
AOS.init();

const Footer1 = () => {
  const preview = usePreview();
  const [navbar] = preview.navbar;
  const selectedColor = preview.selectedColor;
  const gradient = preview.gradient;

  return (
    <div
      className={
        gradient[0]
          ? `NAV-CONTAINER bg-gradient-to-tl ${selectedColor[0].gradient} text-white`
          : `NAV-CONTAINER ${selectedColor[0].tcode} text-white`
      }
    >
      <div className="flex justify-between max-w-6xl mx-auto p-5 items-center">
        <div className="NAV-LOGO flex gap-1.5 items-center">
          <Link
            to="/"
            className="LOGO font-extrabold text-2xl flex items-center gap-1"
          >
            <IconPickerItem icon={navbar.icon} size={24} color="#FFF" />
            {navbar.logo}
          </Link>
        </div>
        <div className="NAV-LINKS flex gap-2 items-center">
          {navbar.links.map((x, val) => {
            return (
              <Link
                key={val}
                className="bg-black bg-opacity-0 hover:bg-opacity-10 active:bg-opacity-20 rounded-lg px-3.5 py-2 transition"
                to={x.link}
              >
                {x.text}
              </Link>
            );
          })}
          <Link
            to={navbar.buttonLink}
            className="bg-black bg-opacity-10 hover:bg-opacity-20 active:bg-opacity-30 rounded-lg px-3.5 py-2 transition"
          >
            {navbar.buttonTitle}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer1;
