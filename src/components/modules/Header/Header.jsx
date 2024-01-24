import { useSelector } from "react-redux";
import authSelectors from "../../../redux/auth/authSelectors";
import Container from "../../common/Container/Container";
import Logo from "../../common/Loader/Logo/Logo";
import { HeaderWrapper } from "./Header.styled";
import Navigation from "./Navigation/Navigation";
import UserBar from "./UserBar/UserBar";

const Header = () => {
  const isLoggedIn = useSelector(authSelectors.selectIsLoggedIn);

  return (
    <Container>
      <HeaderWrapper>
        <Logo />
        <Navigation />
        {isLoggedIn && <UserBar />}
      </HeaderWrapper>
    </Container>
  );
};

export default Header;
