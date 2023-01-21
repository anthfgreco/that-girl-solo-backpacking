import { useState, useEffect } from "react";
import BaseHeader from "./BaseHeader";

function TransparentHeader() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isHeaderTransparent, setHeaderTransparent] = useState(true);

  // Scroll listener
  useEffect(() => {
    window.addEventListener("scroll", updateTransparency);
    return () => window.removeEventListener("scroll", updateTransparency);
  }, []);

  // Resize listener
  useEffect(() => {
    window.addEventListener("resize", updateTransparency);
    return () => window.removeEventListener("resize", updateTransparency);
  }, []);

  // Make header transparent after a full page scroll
  function updateTransparency() {
    window.scrollY >= window.innerHeight
      ? setHeaderTransparent(false)
      : setHeaderTransparent(true);
  }

  return (
    <BaseHeader
      isNavOpen={isNavOpen}
      isHeaderTransparent={isHeaderTransparent}
      setIsNavOpen={setIsNavOpen}
    />
  );
}

export default TransparentHeader;
