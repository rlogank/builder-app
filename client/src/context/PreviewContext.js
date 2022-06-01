import { createContext, useState, useContext } from "react";

const PreviewContext = createContext(null);

export const PreviewProvider = ({ children }) => {
  const colors = [
    {
      id: 0,
      tcode: "bg-blue-600",
      tcodeHover: "hover:bg-blue-700",
      tcodeActive: "active:bg-blue-800",
      tcodeText: "text-blue-600",
      gradient: "from-blue-600 to-purple-500",
    },
    {
      id: 1,

      tcode: "bg-violet-600",
      tcodeHover: "hover:bg-violet-700",
      tcodeActive: "active:bg-violet-800",
      tcodeText: "text-violet-600",
      gradient: "from-violet-600 to-fuchsia-600",
    },
    {
      id: 2,

      tcode: "bg-fuchsia-600",
      tcodeHover: "hover:bg-fuchsia-700",
      tcodeActive: "active:bg-fuchsia-800",
      tcodeText: "text-fuchsia-600",
      gradient: "from-fuchsia-600 to-rose-600",
    },
    {
      id: 3,

      tcode: "bg-rose-600",
      tcodeHover: "hover:bg-rose-700",
      tcodeActive: "active:bg-rose-800",
      tcodeText: "text-rose-600",
      gradient: "from-rose-600 to-pink-500",
    },
    {
      id: 4,

      tcode: "bg-amber-600",
      tcodeHover: "hover:bg-amber-700",
      tcodeActive: "active:bg-amber-800",
      tcodeText: "text-amber-600",
      gradient: "from-amber-500 to-red-500",
    },
    {
      id: 5,

      tcode: "bg-green-600",
      tcodeHover: "hover:bg-green-700",
      tcodeActive: "active:bg-green-800",
      tcodeText: "text-green-600",
      gradient: "from-green-600 to-emerald-500",
    },
    {
      id: 6,

      tcode: "bg-emerald-600",
      tcodeHover: "hover:bg-emerald-700",
      tcodeActive: "active:bg-emerald-800",
      tcodeText: "text-emerald-600",
      gradient: "from-emerald-600 to-teal-500",
    },
    {
      id: 7,

      tcode: "bg-cyan-600",
      tcodeHover: "hover:bg-cyan-700",
      tcodeActive: "active:bg-cyan-800",
      tcodeText: "text-cyan-600",
      gradient: "from-cyan-500 to-sky-500",
    },
  ];
  const navbar = useState({
    icon: "FaRocket",
    logo: "Logo",
    links: [
      {
        text: "Home",
        link: "/home",
      },
      {
        text: "About",
        link: "/about",
      },
    ],
    buttonTitle: "Contact",
    buttonLink: "/contact",
  });
  const hero = useState({
    title: "Welcome to",
    coloredTitle: "my website.",
    body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium voluptatem ipsa incidunt magni, qui odit voluptate, eaque, quas cupiditate excepturi fugiat repellat.",
    image: "",
    buttonText: "Contact me",
    buttonLink: "/contact",
  });
  const features = useState({
    title: "Some amazing",
    coloredTitle: "features.",
    body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium voluptatem.",
    feature: [
      {
        title: "Feature 1",
        body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium voluptatem.",
      },
      {
        title: "Feature 2",
        body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium voluptatem.",
      },
      {
        title: "Feature 3",
        body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium voluptatem.",
      },
      {
        title: "Feature 4",
        body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium voluptatem.",
      },
    ],
  });
  const info = useState({
    title: "More",
    coloredTitle: "information.",
    body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium voluptatem ipsa incidunt magni, qui odit voluptate, eaque, quas..",
  });
  const cta = useState({
    title: "Contact",
    coloredTitle: "me.",
    body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium voluptatem ipsa incidunt magni.",
    buttonTitle: "Contact",
    buttonLink: "/contact",
  });
  const selectedColor = useState(colors[0]);
  const tab = useState("General");
  const gradient = useState(false);
  const footer = useState(navbar);
  const aosDir = useState("fade-left");
  const aosDelay = useState([
    { 1: "200" },
    { 2: "400" },
    { 3: "600" },
    { 4: "800" },
  ]);

  return (
    <PreviewContext.Provider
      value={{
        navbar,
        hero,
        features,
        info,
        cta,
        footer,
        colors,
        selectedColor,
        gradient,
        tab,
        aosDir,
        aosDelay,
      }}
    >
      {children}
    </PreviewContext.Provider>
  );
};

export const usePreview = () => {
  const preview = useContext(PreviewContext);
  if (!preview) {
    throw new Error("You forgot to wrap app in a provider!");
  }
  return preview;
};
