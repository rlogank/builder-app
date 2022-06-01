import NavSidebar from "../builder-components/NavSidebar";
import HeroSidebar from "../builder-components/HeroSidebar";
import FeaturesSidebar from "../builder-components/FeaturesSidebar";
import InfoSidebar from "../builder-components/InfoSidebar";
import CtaSidebar from "../builder-components/CtaSidebar";

const Sidebar = () => {
  return (
    <div className="bg-gradient-to-br from-blue-600 to-violet-500 p-5 h-full flex gap-5">
      <NavSidebar />
      <HeroSidebar />
      <FeaturesSidebar />
      <InfoSidebar />
      <CtaSidebar />
    </div>
  );
};

export default Sidebar;
