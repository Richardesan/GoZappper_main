import Header from "../component/header";
import ImgPlacer from "../component/imgPlacer";

import { ReactNode } from "react";

interface LoginProps {
  children?: ReactNode;
}

const FormBody: React.FC<LoginProps> = ({ children }) => {
  return (
    <div className="relative ">
      <Header />
      <div className="shadow-custom-combined my-10 max-xl:w-8/12 max-md:w-11/12 w-[43%]  mx-auto px-11 rounded-2xl py-8 ">
        {children}
      </div>
      <ImgPlacer />
    </div>
  );
};

export default FormBody;
