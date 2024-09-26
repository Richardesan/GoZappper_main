import Steps from "./Steps";
import { useSelector } from "react-redux";
import Loading from "../../../components/loading";
// Create a selector with inferred types
const selectUser = (state: any) => state.user;

const Content = () => {
  const user = useSelector(selectUser);

  if (!user) {
    return <Loading />;
  }


  return (
    <div>
      <p className="text-3xl font-medium tracking-tight">
        Welcome to your portal,{" "}
        <span className="font-bold tracking-normal">
          {user?.FirstName}
        </span>
      </p>
      <Steps />
    </div>
  );
};

export default Content;
