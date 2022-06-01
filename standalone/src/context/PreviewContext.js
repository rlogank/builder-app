import { createContext, useState, useContext, useEffect } from "react";

const PreviewContext = createContext(null);

export const PreviewProvider = ({ children }) => {
  const navbar = useState(null);
  const hero = useState(null);
  const features = useState(null);
  const info = useState(null);
  const cta = useState(null);
  const footer = useState(null);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((pp) => {
        navbar[1](pp.navbar);
        hero[1](pp.hero);
        features[1](pp.features);
        info[1](pp.info);
        cta[1](pp.cta);
        footer[1](pp.footer);
      });
  }, []);

  if (navbar[0] === null) return null;
  if (hero[0] === null) return null;
  if (features[0] === null) return null;
  if (info[0] === null) return null;
  if (cta[0] === null) return null;
  if (footer[0] === null) return null;
  return (
    <PreviewContext.Provider
      value={{ navbar, hero, features, info, cta, footer }}
    >
      {children}
    </PreviewContext.Provider>
  );
};

export const usePreview = () => {
  const preview = useContext(PreviewContext);
  if (!preview) {
    throw new Error("You forgot to wrap app in a provider, you retard!");
  }
  return preview;
};
