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

const initialValues = { email: "", password: "" };
const schema = Yup.object().shape({
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

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);

  const dispatch = useDispatch();

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (values) => {
    const { email, password } = values;
    try {
      await dispatch(authOperations.signIn({ email, password })).unwrap();
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
                <Label htmlFor="email">Mail:</Label>
                <Input
                  style={{ paddingLeft: "53px" }}
                  id="email"
                  type="email"
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
                  name="password"
                  id="password"
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
              <BtnContainer style={{ width: "174px" }}>
                <WhiteBtn text={"Log In"} />
              </BtnContainer>
              <Link to="/register">Don't have an account?</Link>
            </BtnsBlock>
          </AuthForm>
        )}
      </Formik>
    </>
  );
}
