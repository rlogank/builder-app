import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import { usePreview } from "../context/PreviewContext";
AOS.init();

const SectionWrapper = (props) => {
  const preview = usePreview();
  const aosDir = preview.aosDir;
  return (
    <div className={props.color ? "py-40 bg-gray-100" : "py-40"}>
      <div
        data-aos={aosDir[0]}
        data-aos-delay="200"
        className="max-w-6xl mx-auto"
      >
        {props.children}
      </div>
    </div>
  );
};

export default SectionWrapper;
