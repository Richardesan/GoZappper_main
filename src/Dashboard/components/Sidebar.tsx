import { AppRoutes } from "../../utils/route";
import { NavLink } from "react-router-dom";

const SideBar = () => {

  const myArray = [
    { name: "Credentials", logoFill: "/credentialsFill.svg", logo: "/credentials.svg", links: AppRoutes.credentials },
    { name: "Webhooks", logoFill: "/webhook.svg", logo: "/webHookFill.svg", links: AppRoutes.webHook },
    { name: "Delivery Simulator", logoFill: "/PackageFill.svg", logo: "/Package.svg", links: AppRoutes.delivery },
  ];

  //styles
const container= `border-r relative duration-500 min-h-screen text-base border-borderCol text-lightText px-8 max-md:px-4`



  return (
    <aside className={`${container}`}>
      <div className="flex justify-between items-center mt-6 mb-14">
        <NavLink to={AppRoutes.dashboard} >
        <img src="/Logo.svg" className="max-md:hidden"/>
        <img src="/smalLogo.svg" className="hidden max-md:block" />
        </NavLink>
       
      </div>

      <div className="text-lg font-bold  flex-col  flex relative ">
        <NavLink
          to={AppRoutes.dashboard}
          end 
        >
          {({ isActive }) => (
            <div className="flex items-center font-bold py-5 gap-3  max-md:">
              <img width={24} height={24} src={isActive ? "/IconSet.svg" : "/IconSetFill.svg"} alt="iconset" />
              <p className={`${isActive ? "text-primaryCol" : ""} max-md:hidden`}>
                Dashboard
              </p>
            </div>
          )}
        </NavLink>
      </div>

      <section>
        <p className={` font-semibold text-[#757575] space-y-2  py-5 max-md:hidden`}>General</p>
        {myArray.map((data) => (
          <NavLink
            to={data.links}
            key={data.name}
          >
            {({ isActive }) => (
              <div className="flex items-center font-bold py-3 max-md:py-4 gap-3 max-md:pr-0">
                <img width={24} height={24} src={isActive ? data.logoFill : data.logo} alt={data.name} />
                <p className={` ${isActive ? "text-primaryCol" : ""}  whitespace-pre max-md:hidden`}>
                  {data.name}
                </p>
              </div>
            )}
          </NavLink>
        ))}
      </section>

      <NavLink to={AppRoutes.home}>
        <div className="absolute bottom-9 flex items-center gap-3 text-textRed font-bold">
          <img src="/SignOut.svg" />
          <p className="max-md:hidden">Log out</p>
        </div>
      </NavLink>
    </aside>
  );
};

export default SideBar;
