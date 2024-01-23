import Container from "../../components/common/Container/Container";
import LoginForm from "../../components/modules/AuthSection/AuthForms/LoginForm";
import AuthSection from "../../components/modules/AuthSection/AuthSection";

const LoginPage = () => {
  return (
    <Container>
      <AuthSection formComponent={LoginForm} />
    </Container>
  );
};

export default LoginPage;
