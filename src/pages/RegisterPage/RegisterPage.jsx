import Container from "../../components/common/Container/Container";
import RegisterForm from "../../components/modules/AuthSection/AuthForms/RegisterForm";
import AuthSection from "../../components/modules/AuthSection/AuthSection";

const RegisterPage = () => {
  return (
    <Container>
      <AuthSection formComponent={RegisterForm} />
    </Container>
  );
};

export default RegisterPage;
