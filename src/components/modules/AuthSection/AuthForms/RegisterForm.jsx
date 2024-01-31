import { ErrorMessage, Formik } from "formik";
import { ToastContainer, toast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import * as Yup from "yup";
import {
  Input,
  InputWrapper,
  AuthForm,
  ToggleButton,
  ErrorText,
  ErrorSvgStyled,
  CheckSvgStyled,
  SuccessTxt,
  Link,
  BtnsBlock,
  Label,
  BtnContainer,
} from "./AuthForm.styled";
import { ReactComponent as ShowPassword } from "../../../../assets/icons/eye.svg";
import { ReactComponent as HidePassword } from "../../../../assets/icons/eye-off.svg";
import WhiteBtn from "../../../common/Button/WhiteBtn/WhiteBtn";
import { useDispatch } from "react-redux";
import { authOperations } from "../../../../redux/auth/authOperations";

const initialValues = { name: "", email: "", password: "" };
const schema = Yup.object().shape({
  name: Yup.string()
    .required("Name is required")
    .matches(/[A-Za-z]+/, "Name must contain at least one letter")
    .matches(/^[A-Za-z\s]+$/, "Name must contain only letters and spaces"),
  email: Yup.string()
    .matches(
      /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
      "Emails: digits, letters, . - _ only, e.g., example@mail.com."
    )
    .email("Invalid email format, example@mail.com")
    .required("Email is required"),
  password: Yup.string()
    .min(7, "Password must be at least 7 characters long")
    .max(30, "Passwors must be shorter")
    .required("Password is required")
    .matches(/[a-zA-Z]/, "Password must contain at least one letter")
    .matches(/[0-9]/, "Password must contain at least one number"),
});

export default function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false);

  const dispatch = useDispatch();

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (values) => {
    const { name, email, password } = values;
    try {
      await dispatch(authOperations.signUp({ name, email, password })).unwrap();
    } catch (error) {
      toast.error(`Something went wrong. Try again`, {
        position: "top-right",
        autoClose: 1500,
      });
    }
  };

  return (
    <>
      <ToastContainer transition={Slide} />

      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        {({ values, errors, touched }) => (
          <AuthForm>
            <>
              <InputWrapper>
                <Label htmlFor="name">Name:</Label>
                <Input
                  style={{
                    paddingLeft: "65px",
                  }}
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Ilona Ratushniak"
                  error={errors.name && touched.name ? "true" : "false"}
                  success={values.name && !errors.name ? "true" : "false"}
                />
                <ErrorMessage
                  name="name"
                  render={(message) => <ErrorText>{message}</ErrorText>}
                />
                {errors.name && touched.name ? (
                  <ErrorSvgStyled />
                ) : values.name && !errors.name ? (
                  <CheckSvgStyled />
                ) : null}
              </InputWrapper>

              <InputWrapper>
                <Label htmlFor="email">Mail:</Label>
                <Input
                  style={{ paddingLeft: "53px" }}
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your@email.com"
                  error={errors.email && touched.email ? "true" : "false"}
                  success={values.email && !errors.email ? "true" : "false"}
                />
                <ErrorMessage
                  name="email"
                  render={(message) => <ErrorText>{message}</ErrorText>}
                />
                {errors.email && touched.email ? (
                  <ErrorSvgStyled />
                ) : values.email && !errors.email ? (
                  <CheckSvgStyled />
                ) : null}
              </InputWrapper>

              <InputWrapper>
                <Label htmlFor="password">Password:</Label>
                <Input
                  style={{
                    paddingLeft: "86px",
                  }}
                  type={showPassword ? "text" : "password"}
                  value={values.password}
                  id="password"
                  name="password"
                  placeholder="Yourpasswordhere"
                  error={errors.password && touched.password ? "true" : "false"}
                  success={
                    values.password && !errors.password ? "true" : "false"
                  }
                />
                <ErrorMessage
                  name="password"
                  render={(message) => <ErrorText>{message}</ErrorText>}
                />
                {errors.password && touched.password && !values.password && (
                  <ErrorSvgStyled />
                )}
                {values.password && !errors.password ? (
                  <SuccessTxt>Password is secure</SuccessTxt>
                ) : null}
                <ToggleButton type="button" onClick={handleTogglePassword}>
                  {values.password ? (
                    showPassword ? (
                      <ShowPassword />
                    ) : (
                      <HidePassword />
                    )
                  ) : null}
                </ToggleButton>
              </InputWrapper>
            </>
            <BtnsBlock>
              <BtnContainer>
                <WhiteBtn text={"Registration"} />
              </BtnContainer>
              <Link to="/login">Already have an account?</Link>
            </BtnsBlock>
          </AuthForm>
        )}
      </Formik>
    </>
  );
}
