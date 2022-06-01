import { Link } from "react-router-dom";
import SectionWrapper from "../../containers/SectionWrapper";
import { usePreview } from "../../context/PreviewContext";

const Hero1 = () => {
  const preview = usePreview();
  const [hero] = preview.hero;

  return (
    <SectionWrapper>
      <div className="flex flex-col items-center justify-center gap-5 text-neutral-700">
        <div
          data-aos="fade-left"
          data-aos-delay="300"
          className="text-center text-3xl font-extrabold tracking-tight lg:text-6xl"
        >
          {hero.title}{" "}
          <span className={"text-blue-600"}>{hero.coloredTitle}</span>
        </div>
        <div
          data-aos="fade-left"
          data-aos-delay="150"
          className="max-w-[595px] pb-1.5 text-center text-lg"
        >
          {hero.body}
        </div>
        <Link
          to={hero.buttonLink}
          className={
            "bg-blue-600 text-white px-4 py-3 text-base font-medium transition-all hover:bg-blue-700 active:bg-blue-800 rounded-md"
          }
        >
          {hero.buttonText}
        </Link>
      </div>
    </SectionWrapper>
  );
};

export default Hero1;
