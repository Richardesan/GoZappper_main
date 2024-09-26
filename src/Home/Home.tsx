import { Outlet } from "react-router-dom";
import Header from "./Auth/component/header";
import ImgPlacer from "./Auth/component/imgPlacer";

const Home = () => {
  return (
    <div className="relative ">
      <Header />
      <Outlet />
      <ImgPlacer />
    </div>
  );
};

export default Home;
