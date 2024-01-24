import { useDispatch, useSelector } from "react-redux";
import { authOperations } from "../../../redux/auth/authOperations";
import authSelectors from "../../../redux/auth/authSelectors";
import BlackBtn from "../../common/Button/BlackBtn/BlackBtn";
import Container from "../../common/Container/Container";
import Logo from "../../common/Loader/Logo/Logo";
import { HeaderWrapper, UserBarWrapper } from "./Header.styled";
import Navigation from "./Navigation/Navigation";
import UserBar from "./UserBar/UserBar";

const Header = () => {
  const isLoggedIn = useSelector(authSelectors.selectIsLoggedIn);

  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(authOperations.signOut());
  };

  return (
    <Container>
      <HeaderWrapper>
        <Logo />
        <Navigation />
        <UserBarWrapper>
          {isLoggedIn && <UserBar />}
          {isLoggedIn && <BlackBtn text={"Log out"} onClick={handleLogOut} />}
        </UserBarWrapper>
      </HeaderWrapper>
    </Container>
  );
};

export default Header;
