import Title from "../components/TitleSection/Title";
import HomePage from "../pages/homePage/HomePage";

export const ROUTE_CONSTANTS = {
  home: {
    path: "/",
    pageToRender: "home",
    showHeader: true,
    showFooter: true,
  },
};

export const Components = {
  title: Title,
  home: HomePage,
};
