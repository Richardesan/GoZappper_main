import { FC } from "react";
import { Link } from "react-router-dom";
import { useLinkStyle } from "./getLinkStyle";
import { AppRoutes } from "../../../utils/route";
import AxiosRequest from "../../../utils/axiosRequest";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

interface NavLink {
  path: string;
  label: string;
}

const navLinks: NavLink[] = [
  { path: AppRoutes.home, label: "Get Started" },
  { path: AppRoutes.pricing, label: "Pricing & Payment" },
  { path: `${AppRoutes.dashboard}/${AppRoutes.onboarding}`, label: "Developer Portal" },
];

const Header: FC = () => {
  const navigate = useNavigate();
  async function isLogedIn() {
    try {
      await AxiosRequest({ method: "GET", url: "/profile/" });
      // const a = await axios.get(
      //   `https://monkfish-organic-viper.ngrok-free.app/api/v1/profile/`,
      //   {
      //     headers: { "ngrok-skip-browser-warning": true },
      //     withCredentials: true
      //   }
      // );
      navigate(`${AppRoutes.dashboard}/${AppRoutes.onboarding}`);
    } catch (error) {
      navigate(AppRoutes.login)
      console.log(error);
      toast.error("create an account or sign in");
    }
  }
  const getLinkStyle = useLinkStyle();

  return (
    <nav className="sticky top-0 bg-white ">
      <div className="flex justify-between items-center mx-8 relative ">
        <Link to={AppRoutes.home}>
          <img src="/Logo.svg" alt="Logo" />
        </Link>
        <ul className="flex gap-10">
          {navLinks.map((link, i) => (
            <li key={i} style={getLinkStyle(link.path)} className="pb-4 py-7 text-sm font-bold z-20 transition-colors duration-300 ease-in-out hover:text-primary focus:text-primary">
              {link.label === "Developer Portal" ? (
                <button onClick={isLogedIn}>
                  {link.label}
                </button>
              ) : (
                <Link to={link.path}>
                  {link.label}
                </Link>
              )}
            </li>
          ))}
        </ul>
        
        <div className="absolute w-full border-b-2 border-borderCol bottom-0 -z-20"></div>
      </div>
    </nav>
  );
};

export default Header;
