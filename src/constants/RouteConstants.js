import ComingSoonGame from "../components/comingSoonGame/ComingSoonGame";
import Title from "../components/TitleSection/Title";
import HomePage from "../pages/homePage/HomePage";

export const ROUTE_CONSTANTS = {
  home: {
    path: "/",
    pageToRender: "home",
    showHeader: true,
    showFooter: false,
  },
  default: {
    path: "*",
    pageToRender: "home",
    // showHeader: true,
    // showFooter: false,
  },
  // menu: {
  //   path: "/menu",
  //   pageToRender: "menu",
  //   showHeader: true,
  //   showFooter: true,
  // },
};

export const Components = {
  title: Title,
  // home: HomePage,
  home: ComingSoonGame,
  // menu: ComingSoonGame,
};
