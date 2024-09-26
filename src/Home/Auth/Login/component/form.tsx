import React, { useState } from "react";
import { Link } from "react-router-dom";
import CustomButton from "../../../../Dashboard/components/customButton";
import { loginUserSchema } from "../../loginUserSchema";
import { useFormik } from "formik";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux"; // Import useDispatch to use Redux actions
import { setUser } from "../../../../utils/Redux/userSlice";

const LoginForm = () => {
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const navigate = useNavigate();
  const inputClass =
    "text-darkText mt-1 w-full outline-none border border-borderCol rounded-md p-2 shadow-sm";
  const inputDanger =
    "border-danger shadow-sm focus:border-danger focus:shadow-danger";
  const inputFocus = "focus:border-primaryCol focus:shadow-primaryCol";
  const dispatch = useDispatch(); // Use Redux dispatch

  interface LoginFormValues {
    email: string;
    loginPassword: string;
  }

  const formik = useFormik<LoginFormValues>({
    initialValues: {
      email: "",
      loginPassword: "",
    },
    validationSchema: loginUserSchema,
    onSubmit: (values, { setSubmitting }) => {
      setSubmitting(true);

      Axios.post(
        `${import.meta.env.VITE_API_URL}/authentication/login`,
        {
          email: values.email,
          Password: values.loginPassword,
        },
        { withCredentials: true }
      )
        .then((res) => {
          const { Email, EmailVerified, FirstName, LastName, Id } =
            res.data.data.organization; // Assuming these fields are returned
          dispatch(setUser({ Email, EmailVerified, FirstName, LastName, Id,}));
          navigate("/dashboard/onboarding");
        })
        .catch((err) => toast.error(err.response.data.error))
        .finally(() => {
          setSubmitting(false); // Ensure submitting state is reset
        });
    },
  });

  const {
    values,
    handleBlur,
    errors,
    handleChange,
    touched,
    isSubmitting,
    handleSubmit,
  } = formik;

  const handleFocus = (field: string) => setFocusedField(field);
  const handleBlurField = (e: React.FocusEvent<HTMLInputElement>) => {
    handleBlur(e);
    setFocusedField(null);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 mb-2">
      <label className="block text-sm font-bold">
        <span
          className={`${errors.email && touched.email ? "text-danger" : ""}${
            focusedField === "email" && "text-primaryCol"
          } ${
            ((focusedField === "email" && errors.email && touched.email) ||
              (errors.email && touched.email && "text-danger")) &&
            "text-danger"
          }`}
        >
          Email Address{" "}
        </span>
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlurField}
          onFocus={() => handleFocus("email")}
          className={`${inputClass} ${
            errors.email && touched.email ? inputDanger : inputFocus
          }`}
        />
      </label>
      <label className="block text-sm font-bold">
        <span
          className={`${
            errors.loginPassword && touched.loginPassword ? "text-danger" : ""
          }${focusedField === "loginPassword" && "text-primaryCol"} ${
            ((focusedField === "loginPassword" &&
              errors.loginPassword &&
              touched.loginPassword) ||
              (errors.loginPassword &&
                touched.loginPassword &&
                "text-danger")) &&
            "text-danger"
          }`}
        >
          Password{" "}
          {errors.loginPassword && touched.loginPassword && (
            <span className={`text-danger text-xs `}>
              ({errors.loginPassword})
            </span>
          )}
        </span>
        <input
          type="password"
          name="loginPassword"
          placeholder="Enter Password"
          value={values.loginPassword}
          onChange={handleChange}
          onBlur={handleBlurField}
          onFocus={() => handleFocus("loginPassword")}
          className={`${inputClass} ${
            errors.loginPassword && touched.loginPassword
              ? inputDanger
              : inputFocus
          }`}
        />
      </label>

      <p className="font-semibold text-sm text-end underline cursor-pointer mb-8">
        <Link to="/forgot-password">Forgot Password?</Link>
      </p>

      <CustomButton
        buttonText="Log in"
        customDisable={isSubmitting}
        customType="submit"
      />
      <p className="text-sm font-bold text-center mt-4 mb-6">
        Don't have an account?{" "}
        <Link to="/register">
          <span className="underline text-primaryCol cursor-pointer">Join</span>
        </Link>
      </p>
    </form>
  );
};

export default LoginForm;
