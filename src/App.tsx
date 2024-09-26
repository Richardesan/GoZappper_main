import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AppRoutes } from "./utils/route";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loading from "./components/loading";
import Onboarding from "./Dashboard/Onboarding/Onboarding";
import Credentials from "./Dashboard/Credentials/Credentials";
import Webhook from "./Dashboard/Webhooks/Webhook";
import Delivery from "./Dashboard/Delivery/Delivery";
import Profile from "./Dashboard/Profile/Profile";
import Login from "./Home/Auth/Login/Login";
import Register from "./Home/Auth/Signup/signup";
import Pricing from "./Home/Pricing/Pricing";
import Dashboard from "./Dashboard/dashboard";
import DashboardBody from "./Dashboard/components/body";
import Home from "./Home/Home";
import NotFound from "./components/notFound";
import ComingSoon from "./components/comingSoon";
function Layout() {
  return (
    <Routes>
      {/* Dashboard */}
      <Route path={AppRoutes.dashboard} element={<Dashboard />}>
        <Route path="" element={<DashboardBody />} />
        <Route path={AppRoutes.onboarding} element={<Onboarding />} />
        <Route path={AppRoutes.credentials} element={<Credentials />} />
        <Route path={AppRoutes.webHook} element={<Webhook />} />
        <Route path={AppRoutes.delivery} element={<Delivery />} />
        <Route path={AppRoutes.profile} element={<Profile />} />
        <Route path={AppRoutes.loading} element={<Loading />} />
      <Route path={AppRoutes.missing} element={<NotFound />} />
      </Route>

      {/* Home */}
      <Route path={AppRoutes.home} element={<Home />}>
        <Route path={AppRoutes.login} element={<Login />} />
        <Route path={AppRoutes.register} element={<Register />} />
        <Route path={AppRoutes.pricing} element={<ComingSoon />} />
        <Route path={AppRoutes.terms} element={<ComingSoon />} />
      <Route path={AppRoutes.missing} element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <ToastContainer />
        <Layout />
      </BrowserRouter>
    </QueryClientProvider>
  );
}
