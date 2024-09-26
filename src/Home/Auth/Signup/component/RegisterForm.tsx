import React, { useState } from "react";
import { useFormik } from "formik";
import { Link } from "react-router-dom";
import { userSchema } from "../../userSchema";
import { useNavigate } from "react-router-dom";
import Axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AppRoutes } from "../../../../utils/route";
import CustomButton from "../../../../Dashboard/components/customButton";

//types
interface RegisterFormValues {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  termsAccepted: boolean;
}

//styles
const inputClass = `text-darkText mt-1 w-full outline-none border border-borderCol rounded-md p-2 
    shadow-sm`;
const passwordClass = `text-darkText mt-1 w-full outline-none border border-borderCol rounded-md p-2`;
const inputDanger =
  "border-danger shadow-sm focus:border-danger focus:shadow-danger";
const inputFocus = "focus:border-primaryCol focus:shadow-primaryCol";

// main component
const RegisterForm: React.FC = () => {
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const navigate = useNavigate();

  const formik = useFormik<RegisterFormValues>({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      termsAccepted: false,
    },
    validationSchema: userSchema,
    onSubmit: (values, { setSubmitting, resetForm }) => {
      setSubmitting(true);

      Axios.post(`${import.meta.env.VITE_API_URL}/authentication/signup`, {
        firstName: values.firstName,
        lastName: values.lastName,
        email: values.email,
        Password: values.password,
      })
        .then((res) => {
          toast.success("User Registered Successfully!!", {
            position: "top-right",
          });
          navigate(AppRoutes.login);
          resetForm(); // Reset form fields to initial values
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

  // Focus and blur handling
  const handleFocus = (field: string) => setFocusedField(field);
  const handleBlurField = (e: React.FocusEvent<HTMLInputElement>) => {
    handleBlur(e);
    setFocusedField(null);
  };

  return (
    <form autoComplete="off" onSubmit={handleSubmit} className="space-y-4 mb-2">
      <div className="flex gap-3 max-sm:block max-sm:space-y-2">
        <div className="w-full">
          <label className="block text-sm font-bold">
            <span
              className={`${
                errors.firstName && touched.firstName ? "text-danger" : ""
              }${focusedField === "firstName" && "text-primaryCol"} ${
                ((focusedField === "firstName" &&
                  errors.firstName &&
                  touched.firstName) ||
                  (errors.firstName && touched.firstName && "text-danger")) &&
                "text-danger"
              }`}
            >
              First Name
            </span>
            <input
              type="text"
              name="firstName"
              placeholder="Enter First Name"
              value={values.firstName}
              onChange={handleChange}
              onBlur={handleBlurField}
              onFocus={() => handleFocus("firstName")}
              className={`${inputClass} ${
                errors.firstName && touched.firstName ? inputDanger : inputFocus
              }`}
            />
          </label>
        </div>
        <div className="w-full">
          <label className="block text-sm font-bold">
            <span
              className={`${
                errors.lastName && touched.lastName ? "text-danger" : ""
              }${focusedField === "lastName" && "text-primaryCol"} ${
                ((focusedField === "lastName" &&
                  errors.lastName &&
                  touched.lastName) ||
                  (errors.lastName && touched.lastName && "text-danger")) &&
                "text-danger"
              }`}
            >
              Last Name
            </span>
            <input
              type="text"
              name="lastName"
              placeholder="Enter Last Name"
              value={values.lastName}
              onChange={handleChange}
              onBlur={handleBlurField}
              onFocus={() => handleFocus("lastName")}
              className={`${inputClass} ${
                errors.lastName && touched.lastName ? inputDanger : inputFocus
              }`}
            />
          </label>
        </div>
      </div>

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
          {errors.email && touched.email && (
            <span className={`text-danger text-xs `}>({errors.email})</span>
          )}
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
            errors.password && touched.password ? "text-danger" : ""
          }${focusedField === "password" && "text-primaryCol"} ${
            ((focusedField === "password" &&
              errors.password &&
              touched.password) ||
              (errors.password && touched.password && "text-danger")) &&
            "text-danger"
          }`}
        >
          Password{" "}
          {errors.password && touched.password && (
            <span className={`text-danger text-xs `}>({errors.password})</span>
          )}
        </span>
        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlurField}
          onFocus={() => handleFocus("password")}
          className={`${inputClass} ${
            errors.password && touched.password ? inputDanger : inputFocus
          }`}
        />
      </label>

      <label className="block text-sm font-bold">
        <span
          className={`${
            errors.confirmPassword && touched.confirmPassword
              ? "text-danger"
              : ""
          }${focusedField === "confirmPassword" && "text-primaryCol"} ${
            ((focusedField === "confirmPassword" &&
              errors.confirmPassword &&
              touched.confirmPassword) ||
              (errors.confirmPassword &&
                touched.confirmPassword &&
                "text-danger")) &&
            "text-danger"
          }`}
        >
          Confirm Password{" "}
          {errors.confirmPassword && touched.confirmPassword && (
            <span className={`text-danger text-xs `}>
              ({errors.confirmPassword})
            </span>
          )}
        </span>
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={values.confirmPassword}
          onChange={handleChange}
          onBlur={handleBlurField}
          onFocus={() => handleFocus("confirmPassword")}
          className={`${passwordClass} ${
            errors.confirmPassword && touched.confirmPassword
              ? inputDanger
              : inputFocus
          }`}
        />
      </label>

      <label className="flex items-center gap-2 text-sm">
        <input
          type="checkbox"
          name="termsAccepted"
          checked={values.termsAccepted}
          onChange={handleChange}
          onBlur={handleBlur}
          className="cursor-pointer accent-primaryCol"
        />
        <span>
          You agree to our{" "}
          <Link to={AppRoutes.terms}>
            <span className="text-primaryCol font-bold underline cursor-pointer">
              Terms of Service
            </span>{" "}
          </Link>
          and{" "}
          <Link to={AppRoutes.privacy}>
            <span className="text-primaryCol underline cursor-pointer font-bold">
              Privacy Policy
            </span>
          </Link>
        </span>
      </label>
      {errors.termsAccepted && touched.termsAccepted && (
        <p className="text-danger text-xs font-bold">{errors.termsAccepted}</p>
      )}

      <CustomButton
        buttonText="Join"
        customDisable={isSubmitting}
        customType="submit"
      />

      <p className="text-sm font-bold text-center">
        Already have an account?{" "}
        <Link to="/login">
          <span className="underline text-primaryCol cursor-pointer">
            Log in
          </span>
        </Link>
      </p>
    </form>
  );
};

export default RegisterForm;
