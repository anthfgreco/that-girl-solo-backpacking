import { useState, useEffect } from "react";
import BaseHeader from "./BaseHeader";

function TransparentHeader() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isHeaderTransparent, setHeaderTransparent] = useState(true);

  // Scroll listener
  // Resize listener to make header responsive to window resizing
  useEffect(() => {
    window.addEventListener("scroll", updateTransparency);
    window.addEventListener("resize", updateTransparency);
    return () => {
      window.removeEventListener("scroll", updateTransparency);
      window.removeEventListener("resize", updateTransparency);
    };
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
