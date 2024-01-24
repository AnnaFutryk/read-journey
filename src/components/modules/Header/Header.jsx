import Container from "../../common/Container/Container";
import Logo from "../../common/Loader/Logo/Logo";
import { HeaderWrapper } from "./Header.styled";

const Header = () => {
  return (
    <Container>
      <HeaderWrapper>
        <Logo />
      </HeaderWrapper>
    </Container>
  );
};

export default Header;
