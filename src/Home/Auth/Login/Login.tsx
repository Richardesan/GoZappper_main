import Divider from "../component/divider";
import Formheader from "../component/formHead";
import SocialLogin from "../component/socialLogin";
import LoginForm from "./component/form";

const Login = () => {
  return (
    <main>
      <div className="shadow-custom-combined my-10 max-xl:w-8/12 max-md:w-11/12 w-[43%]  mx-auto px-11 rounded-2xl py-8 ">
        <Formheader
          heading="Log in to Gozapper Developer Portal"
          text="kindly enter your developer account details"
        />
        <LoginForm />
        <Divider name="or log in with" />
        <SocialLogin />
      </div>
    </main>
  );
};

export default Login;
