import Cta1 from "../sections/cta/Cta1";
import Feature1 from "../sections/feature/Feature1";
import Footer1 from "../sections/footer/Footer1";
import Hero1 from "../sections/hero/Hero1";
import Info1 from "../sections/info/Info1";
import Navbar1 from "../sections/navbar/Navbar1";

const Preview = () => {
  return (
    <div className="h-full">
      <Navbar1 />
      <Hero1 />
      <Feature1 />
      <Info1 />
      <Cta1 />
      <Footer1 />
    </div>
  );
};

export default Preview;
