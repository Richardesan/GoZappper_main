import { useLocation } from "react-router-dom";
import { AppRoutes } from "../../../utils/route";

export const useLinkStyle = () => {
  const location = useLocation();

  return (path: string): any => {
    const isDeveloperPortalActive =
      location.pathname === `${AppRoutes.dashboard}/${AppRoutes.onboarding}` ||
      location.pathname === AppRoutes.register ||
      location.pathname === AppRoutes.login;

    const isActive =
      location.pathname === path ||
      (path === `${AppRoutes.dashboard}/${AppRoutes.onboarding}` && isDeveloperPortalActive);

    return {
      color: isActive ? "#03C068" : "black",
      borderBottom: isActive ? "3px solid #03C068" : "none",
    };
  };
};
