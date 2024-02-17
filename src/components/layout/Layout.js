import { FC, useEffect, useMemo, useRef, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Components from "../../common/RenderingComponent.js";

export const Layout = (props) => {
  const {
    hideAllLinks,
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
      {/* {showHeader && (
            <Header
               isUserLoggedIn={false}
               announcementBar={null}
               appName="homepage"
               onNavClickHandler={() => {
                  //
               }}
            />
         )} */}

      {/* shimmer skeleton loader */}
      {/* {isLoading && <Shimmer />} */}

      {/* artist component */}
      {Components(pageToRender)}
      {/* {component} */}

      {/* {isNotLoadingAndisWeb && showFooter && (
            <Footer
               appName="homepage"
               testID="family-footer"
               hideAllLinks={hideAllLinks}
            />
         )} */}
    </>
  );
};
