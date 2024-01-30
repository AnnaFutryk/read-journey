import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authOperations } from "../../../redux/auth/authOperations";
import authSelectors from "../../../redux/auth/authSelectors";
import BlackBtn from "../../common/Button/BlackBtn/BlackBtn";
import Logo from "../../common/Loader/Logo/Logo";
import {
  BurgerBtn,
  HeaderWrapper,
  LogOutWrapp,
  Overlay,
  UserBarWrapper,
} from "./Header.styled";
import Navigation from "./Navigation/Navigation";
import UserBar from "./UserBar/UserBar";
import { ReactComponent as MenuSvg } from "../../../assets/icons/menu.svg";
import BurgerMenu from "./BurgerMenu/BurgerMenu";

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const isLoggedIn = useSelector(authSelectors.selectIsLoggedIn);

  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(authOperations.signOut());
  };

  const handleMenuClick = () => {
    setMenuOpen(!isMenuOpen);
  };

  const handleBackdropClick = () => {
    setMenuOpen(false);
  };

  return (
    <HeaderWrapper>
      <Logo />
      <Navigation />
      <UserBarWrapper>
        {isLoggedIn && <UserBar />}
        <LogOutWrapp>
          {isLoggedIn && <BlackBtn text={"Log out"} onClick={handleLogOut} />}
        </LogOutWrapp>
        <BurgerBtn onClick={handleMenuClick}>
          {!isMenuOpen && <MenuSvg />}
        </BurgerBtn>
        {isMenuOpen && (
          <>
            <Overlay onClick={handleBackdropClick} />
            <BurgerMenu setIsMenuOpen={setMenuOpen} isMenuOpen={isMenuOpen} />
          </>
        )}
      </UserBarWrapper>
    </HeaderWrapper>
  );
};

export default Header;
