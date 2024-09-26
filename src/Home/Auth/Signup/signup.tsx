import Divider from "../component/divider";
import Formheader from "../component/formHead";
import SocialLogin from "../component/socialLogin";
import RegisterForm from "./component/RegisterForm";

const Register = () => {
  return (
    <main>
      <div className="shadow-custom-combined my-10 max-xl:w-8/12 max-md:w-11/12 w-[43%]  mx-auto px-11 rounded-2xl py-8 ">
      <Formheader
        heading="Join Gozapper Developer Portal"
        text="Create a developer account to get started"
      />
      <RegisterForm />
      <Divider name="or Join with" />
      <SocialLogin />
      </div>
    </main>
  );
};

export default Register;
