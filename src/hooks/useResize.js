// use-resize.js
import { useState, useEffect } from "react";

export const useResize = () => {
  const [width, setWidth] = useState(window.innerWidth);

  const mediaQueries = {
    SCREEN_SM: 576,
    SCREEN_MD: 768,
    SCREEN_LG: 992,
    SCREEN_XL: 1200,
    SCREEN_XXL: 1400,
  };

  useEffect(() => {
    const handleResize = (event) => {
      setWidth(event.target.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return {
    width,
    isScreenSm: width >= mediaQueries.SCREEN_SM,
    isScreenMd: width >= mediaQueries.SCREEN_MD,
    isScreenLg: width >= mediaQueries.SCREEN_LG,
    isScreenXl: width >= mediaQueries.SCREEN_XL,
    isScreenXxl: width >= mediaQueries.SCREEN_XXL,
  };
};
