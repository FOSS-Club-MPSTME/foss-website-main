import { useEffect, useState } from "react";
import useMediaQuery from "./useMediaQuery";
import { mobileLayoutQuery } from "../utils/teamMotion";

export default function useTeamCardInteraction() {
  const isMobileLayout = useMediaQuery(mobileLayoutQuery);
  const [activeMobileDescriptionId, setActiveMobileDescriptionId] = useState(null);

  useEffect(() => {
    if (!isMobileLayout) {
      setActiveMobileDescriptionId(null);
    }
  }, [isMobileLayout]);

  return {
    isMobileLayout,
    activeMobileDescriptionId,
    setActiveMobileDescriptionId,
  };
}
