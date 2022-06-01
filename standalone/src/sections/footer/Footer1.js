import SectionWrapper from "../../containers/SectionWrapper";
import { usePreview } from "../../context/PreviewContext";

const Footer1 = () => {
  const preview = usePreview();
  const [navbar] = preview.navbar;
  return (
    <SectionWrapper>
      {navbar.icon}
      {navbar.logo}
      {navbar.links.map((x) => {
        return (
          <>
            {x.title}
            {x.link}
          </>
        );
      })}
    </SectionWrapper>
  );
};

export default Footer1;
