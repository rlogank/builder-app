import { Link } from "react-router-dom";
import SectionWrapper from "../../containers/SectionWrapper";
import { usePreview } from "../../context/PreviewContext";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
AOS.init();

const Cta1 = () => {
  const preview = usePreview();
  const [cta] = preview.cta;
  const selectedColor = preview.selectedColor;
  const gradient = preview.gradient;
  const aosDir = preview.aosDir;
  const aosDelay = preview.aosDelay;

  return (
    <SectionWrapper color="d">
      <div className="flex flex-col items-center justify-center gap-5 text-neutral-700">
        <div className="text-center text-3xl font-extrabold tracking-tight lg:text-6xl">
          {cta.title}{" "}
          <span
            className={
              gradient[0]
                ? `bg-gradient-to-tl bg-clip-text text-transparent ${selectedColor[0].gradient}`
                : selectedColor[0].tcodeText
            }
          >
            {cta.coloredTitle}
          </span>
        </div>
        <div className="max-w-[595px] pb-1.5 text-center text-lg">
          {cta.body}
        </div>

        <Link
          to={cta.buttonLink}
          className={
            gradient[0]
              ? `bg-gradient-to-tl ${selectedColor[0]?.gradient} hover:-hue-rotate-30 active:scale-[95%] text-white px-4 py-3 text-base font-medium rounded-lg transition`
              : `${selectedColor[0]?.tcode} text-white px-4 py-3 text-base font-medium  ${selectedColor[0]?.tcodeHover} ${selectedColor[0]?.tcodeActive} rounded-lg transition`
          }
        >
          {cta.buttonTitle}
        </Link>
      </div>
    </SectionWrapper>
  );
};

export default Cta1;
