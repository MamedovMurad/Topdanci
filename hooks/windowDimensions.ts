import { useState, useEffect } from "react";

export function getWindowDimensions() {
  if (typeof window !== "undefined") {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height,
    };
  }
}

export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState<
    | {
        width: number;
        height: number;
      }
    | undefined
  >(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
}
