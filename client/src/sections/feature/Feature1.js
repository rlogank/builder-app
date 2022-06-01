import SectionWrapper from "../../containers/SectionWrapper";
import { usePreview } from "../../context/PreviewContext";
import { FaCheckCircle } from "react-icons/fa";
import Undraw from "react-undraw";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
AOS.init();

Undraw.defaultProps.primaryColor = "#222";

const Feature1 = () => {
  const preview = usePreview();
  const [features] = preview.features;
  const selectedColor = preview.selectedColor;
  const gradient = preview.gradient;

  return (
    <SectionWrapper color="gray">
      <div
        data-aos="fade-left"
        data-aos-delay="300"
        className="relative flex w-full flex-col items-center justify-evenly gap-5 lg:flex-row"
      >
        <div className="flex flex-col justify-center gap-5 lg:w-1/2">
          <div className="text-4xl font-extrabold tracking-tight lg:text-5xl">
            <div className="mb-2.5 text-left text-base font-medium tracking-normal text-gray-400">
              FEATURES
            </div>
            <div>
              {features.title}{" "}
              <span
                className={
                  gradient[0]
                    ? `bg-gradient-to-tl bg-clip-text text-transparent ${selectedColor[0].gradient}`
                    : selectedColor[0].tcodeText
                }
              >
                {features.coloredTitle}
              </span>
            </div>
          </div>
          <div className="pb-1.5 text-lg">{features.body}</div>
          <div className="grid grid-cols-2 lg:gap-10">
            {features.feature.map((f, v) => {
              return (
                <div key={v} className="p-2.5 lg:p-0">
                  <h3 className="flex items-center gap-1 font-semibold">
                    <FaCheckCircle className={selectedColor[0].tcodeText} />
                    {f.title}
                  </h3>
                  <p>{f.body}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex justify-center lg:w-1/3">
          <Undraw name="features1" />
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Feature1;
