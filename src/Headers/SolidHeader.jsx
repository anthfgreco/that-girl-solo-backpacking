import { useState } from "react";
import BaseHeader from "./BaseHeader";

function SolidHeader() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isHeaderTransparent, setHeaderTransparent] = useState(false);

  return (
    <div>
      <BaseHeader
        isNavOpen={isNavOpen}
        isHeaderTransparent={isHeaderTransparent}
        setIsNavOpen={setIsNavOpen}
      />
      <div className="h-[160px] lg:h-[105px]"></div>
    </div>
  );
}

export default SolidHeader;
