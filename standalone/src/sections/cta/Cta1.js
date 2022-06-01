import SectionWrapper from "../../containers/SectionWrapper";
import { usePreview } from "../../context/PreviewContext";

const Cta1 = () => {
  const preview = usePreview();
  const [cta] = preview.cta;
  return (
    <SectionWrapper color="gray">
      {cta.title}
      {cta.coloredTitle}
      {cta.body}
      {cta.buttonTitle}
      {cta.buttonLink}
    </SectionWrapper>
  );
};

export default Cta1;
