import SectionWrapper from "../../containers/SectionWrapper";
import { usePreview } from "../../context/PreviewContext";
import { FaCheckCircle } from "react-icons/fa";
import Undraw from 'react-undraw';

Undraw.defaultProps.primaryColor = '#222';

const Feature1 = () => {
  const preview = usePreview();
  const [features] = preview.features;
  return (
    <SectionWrapper color="gray">

      <div className="relative flex w-full flex-col items-center justify-evenly gap-5 lg:flex-row">
        <div className="flex flex-col justify-center gap-5 lg:w-1/2">
          <div className="text-4xl font-extrabold tracking-tight lg:text-5xl">
            <div
              data-aos="fade-up"
              data-aos-delay="150"
              className="mb-2.5 text-left text-base font-medium tracking-normal text-gray-400"
            >
              FEATURES
            </div>
            <div data-aos="fade-up" data-aos-delay="300">
              {features.title}{" "}
              <span className="text-blue-600">{features.coloredTitle}</span>
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="450"
            className="pb-1.5 text-lg"
          >
            {features.body}
          </div>
          <div className="grid grid-cols-2 lg:gap-10">
            {features.feature.map((f) => {
              return (
                <div
                  data-aos="fade-up"
                  data-aos-delay="550"
                  className="p-2.5 lg:p-0"
                >
                  <h3 className="flex items-center gap-1 font-semibold">
                    <FaCheckCircle className="text-blue-600" />
                    {f.title}
                  </h3>
                  <p>{f.body}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div data-aos="fade-up" className="flex justify-center lg:w-1/3">
        <Undraw name="features1" />
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Feature1;
