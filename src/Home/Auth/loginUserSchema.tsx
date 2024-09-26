import * as Yup from "yup";
export const loginUserSchema = Yup.object().shape({
  email: Yup.string()
    .email("Please enter a valid email")
    .required("Required"),
  loginPassword: Yup.string()
    .required("Password is mandatory"),
});
