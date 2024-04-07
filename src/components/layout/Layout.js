import { useEffect, useMemo, useRef, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Components from "../../common/RenderingComponent.js";
import Header from "../header/Header.js";
import Footer from "../footer/Footer.js";
import Navbar from "../header/Navbar.js";

export const Layout = (props) => {
  const {
    showHeader = true,
    showFooter = false,
    pageToRender,
    className = "",
  } = props;
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {showHeader && (
        <Header />
        //   <Header
        //     isUserLoggedIn={false}
        //     announcementBar={null}
        //     appName="homepage"
        //     onNavClickHandler={() => {
        //       //
        //     }}
        //   />
      )}

      {/* shimmer skeleton loader */}
      {/* {isLoading && <Shimmer />} */}

      {/* artist component */}
      <div style={{ padding: "0px 18px" }}>{Components(pageToRender)}</div>
      {/* {component} */}

      {showFooter && <Footer appName="homepage" testID="family-footer" />}
    </>
  );
};
