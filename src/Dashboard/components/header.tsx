import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../utils/Redux/store";
import { AppRoutes } from "../../utils/route";
const Header = () => {
    const user = useSelector((state: RootState) => state.user);

  return (
    <div className="  w-full py-4 flex justify-end items-center px-8 max-md:px-2 gap-10">
      <p className="font-bold text-[#757575]">Documentaition</p>
      <Link to={AppRoutes.profile}>
        <div className="flex items-center gap-2 ">
          {/* <img
            src="/Picture.png"
            className="w-7 h-7 rounded-full object-cover object-top"
          /> */}
          <p className="w-7 h-7 font-bold border border-primaryCol text-center rounded-full">{user.LastName.charAt(0)}</p>
          <p className="font-bold text-sm text-darkText"> {user.FirstName} {user.LastName}</p>
        </div>
      </Link>
    </div>
  );
};

export default Header;
