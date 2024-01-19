import Logo from "../../common/Loader/Logo/Logo.jsx";
import { Section, Span, Title } from "./AuthSection.styled.js";

const AuthSection = () => {
  return (
    <Section>
      <Logo />
      <Title>
        Expand your mind, reading <Span>a book</Span>
      </Title>
    </Section>
  );
};

export default AuthSection;
