import * as Yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

export const userSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(3, "First Name must be at least 3 characters")
    .required("Required"),
  lastName: Yup.string()
    .min(3, "Last Name must be at least 3 characters")
    .required("Required"),
  email: Yup.string()
    .email("Please enter a valid email")
    .required("Required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .matches(passwordRules, { message: "Please create a stronger password" })
    .required("required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), undefined], "Passwords must match")
    .required("Required"),
  termsAccepted: Yup.boolean()
    .oneOf([true], "You must accept the terms and conditions")
    .required("Required"),
});
