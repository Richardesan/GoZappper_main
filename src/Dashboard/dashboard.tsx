import SideBar from "./components/Sidebar";
import Header from "./components/header";
import Footer from "./components/footer";
import { Outlet } from "react-router-dom";
import { AppRoutes } from "../utils/route";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../utils/Redux/store";

const Dashboard = () => {
  const user = useSelector((state: RootState) => state.user);
  const [isVerified, setIsVerified] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (user.FirstName) {
      navigate(AppRoutes.login);
    } else {
      setIsVerified(true);
    }
  }, [user.FirstName, navigate]);

  if (!isVerified) {
    return null; // or you can return a loading spinner here
  }

  return (
    <main className="flex">
      <SideBar />
      <section className="flex flex-col justify-between flex-grow">
        <Header />
        <div className="flex-grow px-8 max-md:px-4 py-[5rem]">
          <Outlet />
        </div>
        <Footer />
      </section>
    </main>
  );
};

export default Dashboard;
