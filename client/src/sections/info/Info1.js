import SectionWrapper from "../../containers/SectionWrapper";
import { usePreview } from "../../context/PreviewContext";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
AOS.init();

const Info1 = () => {
  const preview = usePreview();
  const [info] = preview.info;
  const selectedColor = preview.selectedColor;
  const gradient = preview.gradient;

  return (
    <SectionWrapper>
      <div className="flex flex-col items-center justify-center gap-5 text-neutral-700">
        <div className="text-center text-3xl font-extrabold tracking-tight lg:text-6xl">
          {info.title}{" "}
          <span
            className={
              gradient[0]
                ? `bg-gradient-to-tl bg-clip-text text-transparent ${selectedColor[0].gradient}`
                : selectedColor[0].tcodeText
            }
          >
            {info.coloredTitle}
          </span>
        </div>
        <div className="max-w-[595px] pb-1.5 text-center text-lg">
          {info.body}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Info1;
