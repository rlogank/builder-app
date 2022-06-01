import SectionWrapper from "../../containers/SectionWrapper";
import { usePreview } from "../../context/PreviewContext";

const Info1 = () => {
  const preview = usePreview();
  const [info] = preview.info;
  return (
    <SectionWrapper>
      {info.title}
      {info.coloredTitle}
      {info.body}
    </SectionWrapper>
  );
};

export default Info1;
